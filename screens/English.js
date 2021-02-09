import React, { useState } from "react";
import { View, Button, StyleSheet, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Wordnik from "../components/Wordnik";
import Form from "../components/Form";

export default function English({ navigation, handleChange }) {
  const [tempKey, setTempKey] = useState(0);
  const [word, setWord] = useState([
    {
      title: "Baranbaro",
      key: "-1",
    },
    {
      title: "Baranbaro yar",
      key: "-2",
    },
  ]);

  const onPress = () => {
    //return component
    setTempKey(tempKey + 1);
  };

  //Add words to the state on submit
  const addWords = (word) => {
    word, (key = Math.random().toString());
    setWord((title) => {
      return [word, ...title];
    });
  };
  console.log(word);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Wordnik key={tempKey.toString()} />
        <TouchableOpacity onPress={onPress}>
          <Button color="brown" title="Next word" />
        </TouchableOpacity>
      </View>
      <Form addWords={addWords} />
      <View style={styles.flatlistView}>
        <FlatList
          data={word}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text style={styles.words}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
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

  words: {
    color: "black",
    fontSize: 24,
  },
  flatlistView: {
    top: 35,
  },
});
