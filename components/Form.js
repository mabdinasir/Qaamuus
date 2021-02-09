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
          actions.resetForm();
          addWords(values);
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={{ flexDirection: "row", top: 15 }}>
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
              title="Submit"
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
    borderColor: "grey",
    padding: 10,
    fontSize: 18,
    height: 40,
    width: 150,
    marginRight: 10,
    textTransform: "capitalize",
  },
});
