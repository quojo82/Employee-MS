import mysql from "mysql2";

//Connect to the Database
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "smarties@123",
  database: "employeems",
  port: 3307
});

con.connect(function (err) {
  if (err) {
    console.log("connection Error");
  } else {
    console.log('connected!');
  }
});

export default con;
