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
  TouchableOpacity,
} from "react-native";

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
    //refresh component
    setTempKey(tempKey + 1);
  };

  //Add words to the state on submit
  const addWords = (word) => {
    word,
      setWord((title) => {
        return [word, ...title];
      });

    //Save data
    axios({
      url: "/save",
      method: "POST",
      data: word,
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
              <Wordnik key={tempKey.toString()} />
            </View>
            <Button color="brown" title="Next word" onPress={onPress} />
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Form addWords={addWords} />
          </View>

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
  words: {
    color: "black",
    fontSize: 24,
  },
  flatlistView: {
    top: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
