import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from '@navigation/Navigator'
import { ThemeProvider as ThemeManager } from '@src/provider/state-manager/themeProvider'
import { VisibilityProvider } from "@src/provider/state-manager/visibilityProvider";

const App = () => {
  return (
    <ThemeManager>
      <VisibilityProvider>
        <NavigationContainer>
          <MainStackNavigator/>
        </NavigationContainer>
      </VisibilityProvider>
    </ThemeManager>
  );
}
export default App