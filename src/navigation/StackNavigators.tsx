import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { 
  SignUp, 
  SignIn, 
  EnterEmail, 
  ConfirmAccount, 
  FamilyDetails, 
  RelativeData,
  CompleteAccount,
  ConfirmEmail,
  NewPassword
} from "@screens/auth";


const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "#E5E5E5",
    headerBackTitle: "Back",
    headerShown: false, 
    animationEnabled: false
  };

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions = {screenOptionStyle}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="EnterEmail" component={EnterEmail} />
      <Stack.Screen name="ConfirmAccount" component={ConfirmAccount} />
      <Stack.Screen name="FamilyDetails" component={FamilyDetails} />
      <Stack.Screen name="RelativeData" component={RelativeData} />
      <Stack.Screen name="CompleteAccount" component={CompleteAccount} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
    </Stack.Navigator>
  );
}


export { AuthStackNavigator };