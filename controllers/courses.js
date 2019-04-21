const requestServer = require("../services/request");
const query = require("../utils/query");
const retrieveIDs = require("../utils/retrieveIds");
module.exports = {
  async getAllCourses(req, res) {
    try {
      let { body } = await requestServer(query.listCoursesQuery);
      if (!body.data) throw body.errors;
      const courseId = body.data.listCourses.edges[0].node.id;

      let units = await requestServer(query.listCardsQuery(courseId));
      if (!units.body.data) throw units.body.errors;
      const cardIds = retrieveIDs(units.body.data.listUnits.edges);
      res.send("sql write Successfull");
    }
    catch (e) {
      res.send({ message: "Error while fteching api data ", error: e })
    }
  }
}