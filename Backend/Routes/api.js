const express = require("express");

const router = express.Router();
const translateWord = require("../Models/translateWord");

// Routes;
router.get("/", (req, res) => {
  translateWord
    .find({})
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error", dataerror);
    });
});

router.get("/name", (req, res) => {
  const data = {
    username: "Nay",
    age: 25,
  };
  res.json(data);
});

module.exports = router;
