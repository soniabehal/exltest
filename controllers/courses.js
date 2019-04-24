const requestServer = require("../services/request");
const query = require("../utils/query");
const retrieveIDs = require("../utils/retrieveIds");
const sqlquery = require("../config/database/db");
module.exports = {
  async getAllCourses(req, res) {
    try {
      let { body } = await requestServer(query.listCoursesQuery);
      if (!body.data) throw body.errors;
      console.log("course id request successfull ",body);
      const courseId = body.data.listCourses.edges[0].node.id;
      console.log("course id fetch successfull ",courseId);

      let units = await requestServer(query.listCardsQuery(courseId));
      if (!units.body.data) throw units.body.errors;
      let cardIds = retrieveIDs(units.body.data.listUnits.edges);
      console.log("card ids fetch successfull");
      cardIds=cardIds.map(cd=>`(${JSON.stringify(cd)})`);
      console.log("card ids parse successfull");
      let rows = await sqlquery(`INSERT INTO data (id) VALUES ${cardIds.join(',')}`);
      console.log("db insert successfull");
      res.send({
        success: "true",
        message: "MySql write Successfull "+rows.message
      });
    }
    catch (e) {
      res.send({ message: "Error occur while writing Id's ", error: e })
    }
  }
}