require("dotenv").config();
const { addMovie, editMovie, showMovie, removeMovie } = require("./utils");
const { connection } = require("./db");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(
  `mongodb://${process.env.MONGO_DB_URL}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_NAME}`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const mongoConnection = mongoose.connection;
mongoConnection.once("open", () => {
  console.log("connection to mongo made");
});
app.listen(port, () => {
  connection.authenticate();
  console.log("App is online");
});
app.use(express.json());
