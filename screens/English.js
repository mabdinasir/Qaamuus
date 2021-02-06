import React, { useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Wordnik from "./Wordnik";

export default function HomeScreen({ navigation }) {
  const [tempKey, setTempKey] = useState(0);
  const onPress = () => {
    //return component
    setTempKey(tempKey + 1);
  };
  return (
    <View style={styles.container}>
      <Wordnik key={tempKey.toString()} />
      <TouchableOpacity onPress={onPress}>
        <Button title="Next word" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    padding: 40,
  },
});
