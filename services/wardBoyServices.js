const asyncHandler = require("express-async-handler");
const connect = require("../config/database");
const {
  createWardBoy,
  insertIntoward_boy,
  updateWardBoy,
} = require("../utils/queries/wardBoyQuries");

exports.createWardBoyTabe = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // Create Table
    let sql = createWardBoy;
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});

exports.insertIntoWardBoy = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // insert WardBoy
    sql = insertIntoward_boy(req);
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
    sql = updateWardBoy(req);
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Record updated successfully.");

    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});
