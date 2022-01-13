import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from '@navigation/Navigator'
import { ThemeProvider as ThemeManager } from '@src/provider/state-manager/themeProvider'

const App = () => {
  return (
    <ThemeManager>
        <NavigationContainer>
          <MainStackNavigator/>
        </NavigationContainer>
    </ThemeManager>
  );
}
export default App