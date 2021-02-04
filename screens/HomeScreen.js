import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Wordnik from "./Wordnik";

export default function HomeScreen({ navigation }) {
  const onPress = () => {
    alert("Hello");
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={onPress}>
        <Button title="Next Word" />
      </TouchableOpacity>
      <Wordnik />
    </View>
  );
}
