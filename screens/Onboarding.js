import React from "react";
import { View, Text, Button } from "react-native";

export default function Onboarding({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Onboarding Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
}
