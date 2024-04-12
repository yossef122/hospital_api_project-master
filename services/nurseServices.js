const asyncHandler = require("express-async-handler");
const connect = require("../config/database");
const {
  createNurse,
  insertIntoNurse,
  updateNurse,
} = require("../utils/queries/nurseQueries");

exports.createNurseTabe = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // Create Table
    let sql = createNurse;
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});

exports.insertIntoNurse = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // insert Nurse
    sql = insertIntoNurse(req);
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Record Inserted");

    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});

exports.UpdateOneOrMore = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // insert Department
    sql = updateNurse(req);
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Record updated successfully.");
    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});