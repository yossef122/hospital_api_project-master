const asyncHandler = require("express-async-handler");
const connect = require("../config/database");
const {
  createOrganizeTable,
  insertIntoOrganizeTable,
  updateOrganizeTable,
} = require("../utils/queries/organizeQueries");

exports.createOrganizeTableTabe = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // Create Table
    let sql = createOrganizeTable;
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});

exports.insertIntoOrganizeTable = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // insert Department
    sql = insertIntoOrganizeTable(req);
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Record Inserted");
      console.log(req.body);

    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});

exports.UpdateOneOrMore = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // insert Department
    sql = updateOrganizeTable(req);
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Record updated successfully.");
   
    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});
