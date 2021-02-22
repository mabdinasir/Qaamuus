import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import Arabia from "../components/Arabia";
import AnimatedFlatList from "../components/AnimatedFlatList";

const title = "التالية";
export default function Arabic({ navigation }) {
  const [tempKey, setTempKey] = useState(0);

  const onPress = () => {
    //refresh component
    setTempKey(tempKey + 1);
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 10,
        backgroundColor: "#F4F6F6",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 15,
          margin: 15,
        }}
      >
        <View
          style={{
            backgroundColor: "#F8F9F9",
          }}
        >
          <Arabia />
        </View>
        <Button color="brown" title="Next word" onPress={onPress} />
      </View>
      <AnimatedFlatList />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            color: "grey",
            paddingTop: 15,
          }}
        >
          Posts
        </Text>
      </View>
    </View>
  );
}
