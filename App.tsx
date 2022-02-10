import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from '@navigation/Navigator'
import { ThemeProvider as ThemeManager } from '@src/provider/state-manager/themeProvider'
import { VisibilityProvider } from "@src/provider/state-manager/visibilityProvider";
import { UserProvider } from '@src/provider/state-manager/userDataProvider'

const App = () => {
  return (
    <ThemeManager>
      <UserProvider>
        <VisibilityProvider>
          <NavigationContainer>
            <MainStackNavigator/>
          </NavigationContainer>
        </VisibilityProvider>
      </UserProvider>
    </ThemeManager>
  );
}
export default App