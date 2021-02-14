import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
import { Formik } from "formik";

export default function Form({ addWords }) {
  return (
    <>
      <Formik
        initialValues={{ title: "" }}
        onSubmit={(values, actions) => {
          console.log(values);
          addWords(values);
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={{ flexDirection: "row" }}>
            <TextInput
              multiline
              style={styles.input}
              onChangeText={handleChange("title")}
              value={values.title}
              placeholder="Turjun "
            />
            <Button
              style={styles.button}
              onPress={handleSubmit}
              title="Dhig"
              color="brown"
            />
          </View>
        )}
      </Formik>
    </>
  );
}
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 0,
    borderBottomColor: "brown",
    padding: 10,
    fontSize: 18,
    height: 40,
    width: 150,
    marginRight: 10,
    textTransform: "capitalize",
  },
});
