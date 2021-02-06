import React from "react";
import { View, Text, Button } from "react-native";

export default function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Arabbic Screen</Text>
      <Button
        title="Go to profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}
