const asyncHandler = require("express-async-handler");
const connect = require("../config/database");
const {
  createPatient,
  insertPatient,
  updatePatient,
} = require("../utils/queries/patientQueries");

exports.createPatientTabe = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // Create Table
    let sql = createPatient;
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});

exports.insertIntoPatient = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // insert Department
    sql = insertPatient(req);
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Record Inserted");
      console.log(req.body);

      // });
    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});

exports.UpdateOneOrMore = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // insert Department
    sql = updatePatient(req);
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Record updated successfully.");

    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});