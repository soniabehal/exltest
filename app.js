const express = require("express");
const app = express();
const env = require("dotenv").config({ path: './config/.env' });
const routes = require("./routes");

app.use(routes);
app.listen(3000, (err, data) => {
  if (!err) console.log("Server started at 3000");
  else console.log("Error in starting server");
})