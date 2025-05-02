// Basic Requirements
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Dotenv configure
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./db");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Connecting MongoDB using Mongoose
connectDB();

// Importing routes
const userRouter = require("./routes/userRouter");
const capsuleRouter = require("./routes/capsuleRouter");
const authRouter = require("./routes/authRouter");
const authMiddleware = require("./middlewares/authMiddleware");

// Using routes
app.use("/v1/auth", authRouter);

app.use("/v1/users", authMiddleware, userRouter);
app.use("/v1/capsules", authMiddleware, capsuleRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
