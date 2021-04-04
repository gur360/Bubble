import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bookings from './Booking';
import Profile from './Profile.js';
import Login from './Login';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  const homeRoute = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Bookings} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={homeRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Main;
