import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import * as Font from "expo-font";

const wordnik =
  "https://api.wordnik.com/v4/words.json/randomWord?&minLength=1&maxLength=-1&api_key=";
const API_KEY = "bcvez8pvcc44t5p31l336fkxs9f0ifpmv9i3eh13a5sngp7a1";

export default class Wordnik extends Component {
  state = {
    word: "",
    fontLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      Montserrat: require("../assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),

      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      "Montserrat-SemiBold": {
        uri: require("../assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),
        fontDisplay: Font.FontDisplay.FALLBACK,
      },
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    fetch(wordnik + API_KEY)
      .then((res) => res.json())
      // Uncomment here if you have API_KEY
      .then((json) => this.setState({ word: json.word }));
    this.loadFonts();
  }
  render() {
    if (this.state.fontsLoaded) {
      return <Text style={styles.text}>{this.state.word}</Text>;
      //this.state.loading ? `loading...` :
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Montserrat",
    fontSize: 20,
    margin: 5,
    textTransform: "capitalize",
    color: "brown",
  },
});
