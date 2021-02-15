import React, { useState } from "react";
import { View, Button } from "react-native";
import AnimatedFlatList from "../components/AnimatedFlatList";
import Wordnik from "../components/Wordnik";

export default function Arabic({ navigation }) {
  const [tempKey, setTempKey] = useState(0);

  const onPress = () => {
    //refresh component
    setTempKey(tempKey + 1);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F4F6F6' }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 15,
          margin: 15,
          top: 10
        }}
      >
        <View
          style={{
            backgroundColor: "#F8F9F9",
          }}
        >
          <Wordnik key={tempKey.toString()} />
        </View>
        <Button color="brown" title="Next word" onPress={onPress} />
      </View>
      <AnimatedFlatList />
    </View>
  );
}
