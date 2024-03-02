const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "node-crud",
});
module.exports = pool.promise();
