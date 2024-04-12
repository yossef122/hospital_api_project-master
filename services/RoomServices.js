const asyncHandler = require("express-async-handler");
const connect = require("../config/database");
const {
  createRoom,
  insertRoom,
  updateRoom,
} = require("../utils/queries/roomQueries");

exports.createRoomTabe = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // Create Table
    let sql = createRoom;
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});

exports.insertIntoRoom = asyncHandler(async (req, res) => {
  connect.query("USE hospital", function (err, result) {
    if (err) throw err;

    // insert Department
    sql = insertRoom(req);
    connect.query(sql, function (err, result) {
      // if (err) throw err;
      if (err) {
        return res.status(404).json({ err: err.message });
      }
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
    sql = updateRoom(req);
    connect.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Record updated successfully.");

    });

    // Close the connection after all queries are executed
    return res.status(201).json({ message: "success" });
  });
});
