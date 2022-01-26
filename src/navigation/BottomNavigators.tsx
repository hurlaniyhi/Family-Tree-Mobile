import React, { useContext } from "react";
import { AntDesign, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dashboard, Settings, FamilyDetails, ChatMembers } from "@screens/main";
import ThemeContext from '@src/provider/state-manager/themeProvider'
import VisibilityContext from "@src/provider/state-manager/visibilityProvider";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { theme } = useContext(ThemeContext)
  const { visibility } = useContext(VisibilityContext)

  return (
    <Tab.Navigator detachInactiveScreens= {false} screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Home') {
            return focused ? <Entypo name="home" size={24} color={color} />:
                <Ionicons name="home-outline" size={size} color={color} />
        } else if (route.name === 'Settings') {
            return focused ? <Ionicons name="settings-sharp" size={24} color={color} />:
                <AntDesign name="setting" size={size} color={color} />
        } else if (route.name === 'Family Profile') {
            return focused ? <MaterialIcons name="account-tree" size={24} color={color} />:
                <Entypo name="flow-tree" size={size} color={color} />
        } else if (route.name === 'Messages') {
            return focused ? <Ionicons name="chatbox-ellipses" size={24} color={color} />:
                <Ionicons name="chatbox-ellipses-outline" size={size} color={color} />
        }
      },
      tabBarActiveTintColor: theme.FOCUS_THEME_COLOR,
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        backgroundColor: theme.THEME_MODE === 'light' ? '#FFFFFF' : theme.BODY
      },
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: theme.THEME_MODE === 'light' ? '#FFFFFF' : theme.CARD_BACKGROUND
      },
      headerTitleStyle: {color: theme.TEXT_COLOR},
      animationEnabled: false
    })}>
      <Tab.Screen name="Home" component={Dashboard} options={{
        headerShown: false, 
        tabBarStyle: { 
          display: visibility.isCreatePost || visibility.isAddComment ? "none" : "flex",
          backgroundColor: theme.THEME_MODE === 'light' ? '#FFFFFF' : theme.BODY
        }
        }}
      />
      <Tab.Screen name="Family Profile" component={FamilyDetails} options={{headerShown: false}} />
      <Tab.Screen name="Messages" component={ChatMembers}/>
      <Tab.Screen name="Settings" component={Settings} options={{
        headerStyle: {
          backgroundColor: theme.THEME_MODE === "light" ? 
            theme.FOCUS_THEME_COLOR_LIGHT: 
            theme.CARD_BACKGROUND
        }, 
        headerTitleStyle: {color: theme.TEXT_COLOR},
      }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;