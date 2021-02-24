import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Tabs from "./Routes/Tabs";
import Onboarding from "./screens/Onboarding";

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="brown" />
    </View>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [viewedOnBoarding, setviewedOnBoarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");
      if (value !== null) {
        setviewedOnBoarding(true);
      }
    } catch {
      console.log("Error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  return loading ? <Loading /> : viewedOnBoarding ? <Tabs /> : <Onboarding />;
}
const styles = StyleSheet.create({});
