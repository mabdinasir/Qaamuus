import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Tabs from "./Routes/Tabs";
import Onboarding from "./screens/Onboarding";

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size="large" color= 'brown'/>
    </View>
  );
};

const checkOnboarding = async () => {
  try {
    
  } catch {
    
  } finally {

  }
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [viewedOnBoarding, setviewedOnBoarding] = useState(false);
  return (
    <View style={styles.container}>
      {loading ? <Loading /> : viewedOnBoarding ? <Tabs /> : <Onboarding />}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
