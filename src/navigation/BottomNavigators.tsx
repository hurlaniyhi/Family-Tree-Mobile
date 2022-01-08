import React from "react";
import { Feather, AntDesign, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dashboard, Settings, FamilyTree, ChatMembers } from "@screens/main";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Home') {
            return focused ? <Entypo name="home" size={24} color={color} />:
                <Ionicons name="home-outline" size={size} color={color} />
        } else if (route.name === 'Settings') {
            return focused ? <Ionicons name="settings-sharp" size={24} color={color} />:
                <AntDesign name="setting" size={size} color={color} />
        } else if (route.name === 'Family Tree') {
            return focused ? <MaterialIcons name="account-tree" size={24} color={color} />:
                <Entypo name="flow-tree" size={size} color={color} />
        } else if (route.name === 'Messages') {
            return focused ? <Ionicons name="chatbox-ellipses" size={24} color={color} />:
                <Ionicons name="chatbox-ellipses-outline" size={size} color={color} />
        }
      },
      tabBarActiveTintColor: '#00BF4D',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen options={{ headerShown: false }} name="Home" component={Dashboard} />
      <Tab.Screen name="Family Tree" component={FamilyTree} />
      <Tab.Screen name="Messages" component={ChatMembers} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;