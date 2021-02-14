import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Button,
  StyleSheet,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import Wordnik from "../components/Wordnik";
import Form from "../components/Form";

export default function English() {
  const [tempKey, setTempKey] = useState(0);
  const [word, setWord] = useState([]);

  useEffect(() => {
    // fetch data on component mount
    getWords();
  });

  const onPress = () => {
    //return component
    setTempKey(tempKey + 1);
  };

  //Add words to the state on submit
  const addWords = (word) => {
    // word is contain value like this { title: "text_input_value_from_Form_component"}
    setWord([...word, { title: word.title, key: Math.random().toString() }]);

    //Save data
    axios({
      url: "/api/save",
      method: "POST",
      data: { title: word.title },
    })
      .then(() => {
        console.log("Data has been sent to the server!");
      })
      .catch(() => {
        console.log("Nooooo. Data has not been sent to the server!");
      });
  };
  const getWords = () => {
    //fetch data from db
    axios
      .get("/api")
      .then((response) => {
        const data = response.data;
        setWord(data); // set data because data will be array of object of "title" and "date"
      })
      .catch(() => {
        console.log("Error retrieving data!!");
      });
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={{ flexDirection: "row", backgroundColor: "#F8F9F9" }}>
            <Wordnik key={tempKey.toString()} />
            <TouchableOpacity onPress={onPress}>
              <Button color="brown" title="Next word" />
            </TouchableOpacity>
          </View>
          <View style={{top: 30}}>
            <Form addWords={addWords}  />
          </View>
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
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F6",
    alignItems: "center",
    paddingTop: 40,
  },

  words: {
    color: "black",
    fontSize: 24,
  },
  flatlistView: {
    top: 35,
  },
});
