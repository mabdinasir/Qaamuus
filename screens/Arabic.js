import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import Arabia from "../components/Arabia";

import words from "../arabicWords.json";

export default function Arabic({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F4F6F6",
      }}
    >
      {/* <Text>{words.arabicWords}</Text> */}
      <Arabia />
    </View>
  );
}
