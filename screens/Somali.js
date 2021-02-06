import React from "react";
import { View, Text, Button } from "react-native";

export default function Somali({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Somali Screen</Text>
      <Button
        title="Go to English"
        onPress={() => navigation.navigate("English")}
      />
    </View>
  );
}
