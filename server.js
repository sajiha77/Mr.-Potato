const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./Routes");
const connectDB = require("./Config/DatabaseConfig");

const app = express();
const PORT = 5000;

dotenv.config();
app.use(cors());

connectDB();
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/api", router);

app.listen(PORT || 5002, () => {
  console.log(`Port Startings at ${PORT}`);
});
