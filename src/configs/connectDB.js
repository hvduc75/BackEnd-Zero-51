import mysql from "mysql2";

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "nodejsbasic",
});

// connection.query("SELECT * FROM `users`", function (err, results, fields) {
//     console.log('>>> check My sql')
//     console.log(results); // results contains rows returned by server
//     let rows = results.map((row) => {return row });
//     console.log(rows);
// });

export default connection;