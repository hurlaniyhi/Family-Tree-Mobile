import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "@screens/about";
import Contact from "@screens/contact";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
    headerShown: false
  };

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}

// const ContactStackNavigator = () => {
//     return (
//       <Stack.Navigator screenOptions={screenOptionStyle}>
//         <Stack.Screen name="Contact" component={Contact} />
//       </Stack.Navigator>
//     );
//   }

export { MainStackNavigator };