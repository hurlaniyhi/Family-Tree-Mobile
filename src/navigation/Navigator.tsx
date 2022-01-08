import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from './BottomNavigators'
import Home from '@screens/home'

const Stack = createStackNavigator();

const OverallStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions = {{headerShown: false}}>
      <Stack.Screen name="WelcomePage" component={Home} />
      <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default OverallStackNavigator