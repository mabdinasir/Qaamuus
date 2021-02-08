const mongoose = require("mongoose");

//Schema
const Schema = mongoose.Schema;
const translateWordSchema = new Schema({
  word: String,
  date: {
    type: String,
    default: Date.now(),
  },
});

//Model
const translateWord = mongoose.model("translateWord", translateWordSchema);

module.exports = translateWord;
