import React, { useState } from "react";
import {
  StatusBar,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import Wordnik from "../components/Wordnik";
import Form from "../components/Form";

let randomnames = [
  "Adam ",
  "Alex ",
  "Aaron ",
  "Ben ",
  "Carl ",
  "Dan ",
  "David ",
  "Edward",
  "Fred",
  "Frank",
  "George",
  "Hal",
  "Hank",
  "Ike",
  "John",
  "Jack",
  "Joe",
  "Larry",
  "Monte",
  "Matthew",
  "Mark",
  "Nathan",
  "Otto",
  "Paul",
  "Peter",
  "Roger",
  "Roger",
  "Steve",
  "Thomas",
  "Tim",
  "Ty",
  "Victor",
  "Walter",
];

const BG_IMG =
  "https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto";
let randomImage = "https://picsum.photos/200";
const window = Dimensions.get("window").width;
const SPACING = 15;
const AVATAR_SIZE = 70;
ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

export default () => {
  const [tempKey, setTempKey] = useState(0);

  const [word, setWord] = useState([]);

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
  };
  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <View
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight || 15,
        backgroundColor: "#F4F6F6",
      }}
    >
      {/* <Image
        source={{ uri: BG_IMG }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      /> */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: SPACING,
          margin: SPACING,
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

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          padding: SPACING,
          margin: SPACING,
          backgroundColor: "rgba(255,255,255,0.8)",
          borderRadius: 12,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.3,
          shadowRadius: 20,
        }}
      >
        <Form addWords={addWords} />
      </View>

      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          color: "grey",
          left: window / 2.3,
        }}
      >
        Posts
      </Text>

      <Animated.FlatList
        data={word}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(item, index) => index.toString()} // bounces="false"
        // showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: StatusBar.height || 42,
        }}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];
          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 1),
          ];

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });
          return (
            <Animated.View
              style={{
                flexDirection: "row",
                padding: SPACING,
                marginBottom: SPACING,
                backgroundColor: "rgba(255,255,255,0.8)",
                borderRadius: 12,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.3,
                shadowRadius: 20,
                opacity,
                transform: [{ scale }],
              }}
            >
              <Image
                source={{ uri: randomImage }}
                style={{
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE,
                  borderRadius: AVATAR_SIZE,
                  marginRight: SPACING / 2,
                }}
              />
              <View>
                <Text style={{ fontSize: 22, fontWeight: "700" }}>
                  {randomnames[Math.floor(Math.random() * randomnames.length)]}
                </Text>
                <Text style={{ fontSize: 16, opacity: 0.7 }}>{item.title}</Text>
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    padding: 40,
  },
});
