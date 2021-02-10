const express = require("express");

const router = express.Router();
const translateWord = require("../Models/translateWord");

// Routes;
router.get("/", (req, res) => {
  translateWord
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error", dataerror);
    });
});

router.post("/save", (req, res) => {
  console.log("Body", req.body);
  const data = req.body;

  const newtranslateWord = new translateWord(data);

  //save to db
  newtranslateWord.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, Internal Servr error!" });
      return;
    }
    return res.json({
      msg: "Your data has been saved!!!",
    });
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
