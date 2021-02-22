import React from "react";
import { View, Text } from "react-native";
import AnimatedFlatList from "../components/AnimatedFlatList";
export default function Somali() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F4F6F6" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 15,
          margin: 15,
          top: 10,
        }}
      >
        <View style={{}}>
          <Text
            style={{
              fontFamily: "Montserrat",

              fontSize: 22,
              fontWeight: "bold",
              color: "grey",
              backgroundColor: "#F8F9F9",
            }}
          >
            Halkan dhig ereyo soomali ah
          </Text>
        </View>
      </View>
      <AnimatedFlatList />
    </View>
  );
}
