import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from './BottomNavigators'
import { AuthStackNavigator } from "./StackNavigators";
import { ThemeProvider } from "styled-components";
import ThemeContext from '@src/provider/state-manager/themeProvider'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { fonts } from '@src/provider/config/constant'
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const { theme } = useContext(ThemeContext)
  const [loaded] = useFonts(fonts);

  if(!loaded){
    return null
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
          <Stack.Navigator screenOptions = {{headerShown: false}}>
            <Stack.Screen name="Auth" component={AuthStackNavigator} />
            <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
          </Stack.Navigator>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default MainStackNavigator