// Basic Requirements
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Dotenv configure
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./db/connectDB");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Connecting MongoDB using Mongoose
connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
