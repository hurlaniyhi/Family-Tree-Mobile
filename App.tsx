import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import OverallStackNavigator from '@navigation/Navigator'

 const App = () => {
  return (
    <NavigationContainer>
      <OverallStackNavigator/>
    </NavigationContainer>
  );
}
export default App