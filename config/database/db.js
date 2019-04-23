const mysql = require('mysql'); // or use import if you use TS
const util = require('util');
const conn = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
});

const query = util.promisify(conn.query).bind(conn);

module.exports=query;