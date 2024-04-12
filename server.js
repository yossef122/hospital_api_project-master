
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

const patientRoutes = require("./routes/patientRoute");
const doctorRoutes = require("./routes/doctorRoute");
const departmentRoute = require("./routes/departmentRoute");
const nurseRoute = require("./routes/nurseRoute");
const roomRoute = require("./routes/roomsRoute");
const wardBoy = require("./routes/wardBoyRoute");
const pharmacy = require("./routes/PharmacyRoute");
const hospital = require("./routes/hospitalRoute");
const join1Route = require("./routes/join1Route");
const join2Route = require("./routes/join2Route");
const getData = require("./routes/getRoute");

dotenv.config({ path: "config.env" });

const app = express();
app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/v1/patient", patientRoutes);
app.use("/api/v1/doctor", doctorRoutes);
app.use("/api/v1/department", departmentRoute);
app.use("/api/v1/nurse", nurseRoute);
app.use("/api/v1/rooms", roomRoute);
app.use("/api/v1/wardBoy", wardBoy);
app.use("/api/v1/pharmacy", pharmacy);
app.use("/api/v1/hospital", hospital);
app.use("/api/v1/join1", join1Route);
app.use("/api/v1/join2", join2Route);
app.use("/api/v1/getData", getData);


const Port = process.env.PORT || 8000;

app.listen(Port, () => {
  console.log("App Running on port " + Port);
});

// Handle rejection outside express
process.on("unhandledRejection", (err) => {
  console.error(`UnhandledRejection Errors: ${err.name} | ${err.message}`);
  server.close(() => {
    console.error(`Shutting down....`);
    process.exit(1);
  });
});

