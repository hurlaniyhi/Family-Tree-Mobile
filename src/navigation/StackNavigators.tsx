import React, { useContext } from "react";
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
import { Chat, Profile, EditProfile, SearchPage, FamilyMembers } from '@screens/main'
import ThemeContext from '@src/provider/state-manager/themeProvider'


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
    <Stack.Navigator detachInactiveScreens={false} screenOptions = {screenOptionStyle}>
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

const OtherStackNavigator = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Stack.Navigator detachInactiveScreens={false} screenOptions = {screenOptionStyle}>
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="SearchPage" component={SearchPage} />
      <Stack.Screen name="FamilyMembers" component={FamilyMembers} options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.THEME_MODE === 'light' ? '#FFFFFF' : theme.CARD_BACKGROUND
        },
        headerTitleStyle: {color: theme.TEXT_COLOR},
        headerTitleAlign: 'center',
        headerTitle: 'Family Members',
        headerTintColor: theme.TEXT_COLOR
      }} />
    </Stack.Navigator>
  )
}


export { AuthStackNavigator, OtherStackNavigator };