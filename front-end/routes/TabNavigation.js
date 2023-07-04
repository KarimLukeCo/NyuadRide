import React from 'react'
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import CreateListing from "../Screens/CreateListing"
import AvailableListing from "../Screens/AvailableListing"
import Chat from "../Screens/Chat"
import FollowUp from "../Screens/FollowUp"
import BusRoute from "../Screens/BusRoute"
import LogIn from "../Screens/LogIn"
import Ionicons from 'react-native-vector-icons/Ionicons' 

const Tab = createBottomTabNavigator();

const TabNavigator=()=>{
  return (
          <Tab.Navigator
          screenOptions={{
            tabBarStyle: { backgroundColor: '#AD40AF' },
            tabBarInactiveTintColor: '#fff',
            tabBarActiveTintColor: 'yellow'
          }}
            
            >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({color, size})=>(
                  <Ionicons name='home-outline' color={color} size={size}/>
                )}}
            />

            <Tab.Screen
              name="Create Trip"
              component={CreateListing}
              options={{
                tabBarIcon: ({color, size})=>(
                  <Ionicons name='add-circle-sharp' color={color} size={size}/>
                )}}
            />

            <Tab.Screen
              name="My Bus"
              component={BusRoute}
              options={{
                tabBarIcon: ({color, size})=>(
                  <Ionicons name='bus' color={color} size={size}/>
                )}}
            />
          </Tab.Navigator>
);
}

export default TabNavigator