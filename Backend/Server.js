const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
require("dotenv/config");

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.mongodbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to DB");
});

// Routes;
app.get("/api", (req, res) => {
  const data = {
    username: "Abdelnacer",
    age: 26,
  };
  res.json(data);
});

app.get("/api/name", (req, res) => {
  const data = {
    username: "Nay",
    age: 25,
  };
  res.json(data);
});

app.listen(PORT, console.log(`Server started at port ${PORT}`));
