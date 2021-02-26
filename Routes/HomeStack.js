import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import English from "../screens/English";
import Arabic from "../screens/Arabic";
import Somali from "../screens/Somali";
import Profile from "../screens/Profile";
import Onboarding from "../screens/Onboarding";

export default function HomeStack() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="English" component={English} />
        <Stack.Screen name="Arabic" component={Arabic} />
        <Stack.Screen name="Somali" component={Somali} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
