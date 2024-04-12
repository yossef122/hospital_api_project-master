const asyncHandler = require("express-async-handler");
const connect = require("../config/database");
const {
  createDepartment,
  insertDepartment,
  updateDepartment,
} = require("../utils/queries/departmentQueries");

exports.createDepartmentTabe = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // Create Table
    let sql = createDepartment;
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});

exports.insertIntoDepartment = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    sql = insertDepartment(req);
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

    sql = updateDepartment(req);
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Record updated successfully.");
    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});

