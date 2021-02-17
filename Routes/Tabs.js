import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import Icon from 'react-native-ico-flags';

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
              iconName = focused ? "england" : "england";
            } else if (route.name === "Arabic") {
              iconName = focused ? "saudi-arabia" : "saudi-arabia";
            } else if (route.name === "Somali") {
              iconName = focused ? "somalia" : "somalia";
            } else if (route.name === "Profile") {
              return <FontAwesome5 name="skull" size={24} color="white" />
            }

            // You can return any component that you like here!
            return <Icon name={iconName} height="40" width="40"/>;
          },
        })}
        tabBarOptions={{
          showLabel: false,
          keyboardHidesTabBar: true,
          activeTintColor: "brown",
          inactiveTintColor: "grey",
          style: {
            backgroundColor: "brown", //color you want to change
            height: 70,
            borderTopRightRadius: 35,
            borderTopLeftRadius: 35,
            alignItems: "center"
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
