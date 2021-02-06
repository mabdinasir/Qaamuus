import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

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
              iconName = focused ? "home" : "home";
            } else if (route.name === "Onboarding") {
              iconName = focused ? "heartbeat" : "heartbeat";
            }

            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "brown",
          inactiveTintColor: "brown",
          style: {
            backgroundColor: "ghostwhite", //color you want to change
            // borderTopColor: 'grey',
          },
        }}
      >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="Onboarding" component={Onboarding} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
