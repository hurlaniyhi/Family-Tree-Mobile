import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MainStackNavigator } from "./src/navigation/StackNavigators";
import BottomTabNavigator from "./src/navigation/BottomNavigators";
import OverallStackNavigator from './src/navigation/Navigator'

 const App = () => {
  return (
    <NavigationContainer>
      {/* <BottomTabNavigator /> */}
      <OverallStackNavigator/>
      {/* <MainStackNavigator/> */}
    </NavigationContainer>
  );
}
export default App