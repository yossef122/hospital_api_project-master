const asyncHandler = require("express-async-handler");
const connect = require("../config/database");
const {
  createPharmacy,
  insertIntoPharmacy,
  updatePharmacy,
} = require("../utils/queries/pharmacyQueries");

exports.createPharmacyTabe = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // Create Table
    let sql = createPharmacy;
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});

exports.insertIntoPharmacy = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // insert Department
    sql = insertIntoPharmacy(req);
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
    sql = updatePharmacy(req);
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Record updated successfully.");

    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});
