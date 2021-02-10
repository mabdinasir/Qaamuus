const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
require("dotenv/config");

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require("./Routes/api");

mongoose.connect(process.env.mongodbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to DB");
});

//Saving data to our mongoose schema
const data = {
  word: "laba-xiniinyood",
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", routes);

app.listen(PORT, console.log(`Server started at port ${PORT}`));
