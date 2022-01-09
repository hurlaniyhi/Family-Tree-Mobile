import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from '@navigation/Navigator'
import { ThemeProvider } from '@src/provider/state-manager/themeProvider'
import ThemeContext from '@src/provider/state-manager/themeProvider'


 const App = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <ThemeProvider>
        <NavigationContainer>
          <MainStackNavigator/>
        </NavigationContainer>
    </ThemeProvider>
  );
}
export default App