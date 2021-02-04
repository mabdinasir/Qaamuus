import React, { Component } from "react";
import { Text } from "react-native";

const wordnik =
  "https://api.wordnik.com/v4/words.json/randomWord?&minLength=5&maxLength=-1&api_key=";
const API_KEY = "bcvez8pvcc44t5p31l336fkxs9f0ifpmv9i3eh13a5sngp7a1";

export default class Wordnik extends Component {
  state = {
    word: "",
  };

  componentDidMount() {
    fetch(wordnik + API_KEY)
      .then((res) => res.json())
      // Uncomment here if you have API_KEY
      .then((json) => this.setState({ word: json.word }));
  }
  render() {
    return <Text>{this.state.word}</Text>;
  }
}
