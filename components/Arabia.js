import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import words from "../arabicWords.json";

let word = words.arabicWords;

console.log(
  word[Object.keys(word)[Math.floor(Math.random() * Object.keys(word).length)]]
);

const Arabia = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={styles.text}>
        {
          word[
            Object.keys(word)[
              Math.floor(Math.random() * Object.keys(word).length)
            ]
          ]
        }
      </Text>
    </View>
  );
};

export default Arabia;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 5,
    top: 5,
    textTransform: "capitalize",
    color: "brown",
  },
});
