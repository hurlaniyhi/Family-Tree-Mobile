import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from './BottomNavigators'
import { AuthStackNavigator } from "./StackNavigators";
import { ThemeProvider } from "styled-components";
import ThemeContext from '@src/provider/state-manager/themeProvider'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={{color: theme?.color}}>
      <Stack.Navigator screenOptions = {{headerShown: false}}>
        <Stack.Screen name="Auth" component={AuthStackNavigator} />
        <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
      </Stack.Navigator>
    </ThemeProvider>
  );
};

export default MainStackNavigator