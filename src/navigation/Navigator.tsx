import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from './BottomNavigators'
import { AuthStackNavigator, OtherStackNavigator } from "./StackNavigators";
import { ThemeProvider } from "styled-components";
import ThemeContext from '@src/provider/state-manager/themeProvider'
import VisibilityContext from '@src/provider/state-manager/visibilityProvider'
import UserContext from '@src/provider/state-manager/userDataProvider'
import { StatusBar } from 'expo-status-bar'
import { fonts } from '@src/provider/config/constant'
import { useFonts } from 'expo-font';
import { FlashNotification } from '@styles'
import { LoadingView } from '@component'


const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const { theme } = useContext(ThemeContext)
  const { visibility } = useContext(VisibilityContext)
  const [loaded] = useFonts(fonts);
  const { user, getStoredData } = useContext(UserContext)

  if(!loaded){
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style={theme.THEME_MODE === 'light' ? 'dark' : 'light'} backgroundColor="transparent" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={AuthStackNavigator} options={{animationEnabled: false}} />
        <Stack.Screen name="Dashboard" component={BottomTabNavigator} options={{animationEnabled: false}}/>
        <Stack.Screen name="Others" component={OtherStackNavigator} options={{animationEnabled: false}}/>
      </Stack.Navigator>
      {visibility.isLoading ? <LoadingView /> : null}
      <FlashNotification />
    </ThemeProvider>
  );
};

export default MainStackNavigator