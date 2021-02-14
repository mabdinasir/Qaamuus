import React from "react";
import { View, Text } from "react-native";
import Form from "../components/Form";
export default function Somali() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F4F6F6",
        alignItems: "center",
        paddingTop: 42,
      }}
    >
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          color: "grey",
          paddingBottom: 20,
        }}
      >
        Halkan Gali ereyo soomali ah
      </Text>
      <Form />
    </View>
  );
}
