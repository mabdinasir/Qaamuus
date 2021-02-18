import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import words from "../arabicWords.json";

const Arabia = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={words.arabicWords}
        renderItem={({ item }) => (
          <View>
            <Text style={{ color: "red", fontSize: 36, fontWeight: "bold" }}>
              {item}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
console.log({ words });

export default Arabia;

const styles = StyleSheet.create({});
