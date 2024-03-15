import connection from "../configs/connectDB";

let getHomePage = (req, res) => {
  // logic at here
  let data = [];
  connection.query("SELECT * FROM `users`", function (err, results, fields) {
    results.map((row) => {
      data.push({
        id: row.id,
        email: row.email,
        address: row.address,
        lastName: row.lastName,
        firstName: row.firstName,
      });
    });
    return res.render("index.ejs", { dataUser: data });
  });
};

module.exports = {
  getHomePage,
};
