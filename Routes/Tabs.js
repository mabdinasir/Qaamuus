import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import HomeScreen from "../screens/English";
import Arabic from "../screens/Arabic";
import Somali from "../screens/Somali";
import Profile from "../screens/Profile";

export default function Tabs() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "English") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Arabic") {
              iconName = focused ? "heartbeat" : "heartbeat";
            } else if (route.name === "Somali") {
              iconName = focused ? "pills" : "pills";
            } else if (route.name === "Profile") {
              iconName = focused ? "skull" : "skull";
            }

            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={32} color={color} />;
          },
        })}
        tabBarOptions={{
          showLabel: false,
          keyboardHidesTabBar: true,
          activeTintColor: "brown",
          inactiveTintColor: "grey",
          style: {
            backgroundColor: "ghostwhite", //color you want to change
            position: "absolute",
            height: 70,
            // paddingBottom: 8,
            // borderTopColor: 'grey',
          },
        }}
      >
        <Tab.Screen name="English" component={HomeScreen} />
        <Tab.Screen name="Arabic" component={Arabic} />
        <Tab.Screen name="Somali" component={Somali} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
