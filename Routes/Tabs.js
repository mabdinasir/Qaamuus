import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, View, Text } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import Onboarding from "../screens/Onboarding";

export default function Tabs() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "HomeScreen") {
              iconName = focused ? "home-sharp" : "home-outline";
            } else if (route.name === "Onboarding") {
              iconName = focused ? "ios-list" : "ios-list";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#be0000",
          inactiveTintColor: "black",
          style: {
            backgroundColor: "#f9faff", //color you want to change
          },
        }}
      >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="Onboarding" component={Onboarding} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
