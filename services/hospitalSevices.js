const asyncHandler = require("express-async-handler");
const connect = require("../config/database");
const {
  createHospital,
  insertIntoHospital,
  updateHospital,
} = require("../utils/queries/hospitalQueries");

exports.createHospitalTabe = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // Create Table
    let sql = createHospital;
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});

exports.insertIntoHospital = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // insert Department
    sql = insertIntoHospital(req);
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
    sql = updateHospital(req);
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Record updated successfully.");

    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});

