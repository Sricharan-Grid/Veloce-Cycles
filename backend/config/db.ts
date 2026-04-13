import mysql from "mysql2/promise"; // Added /promise

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "sricharanschema",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default db;