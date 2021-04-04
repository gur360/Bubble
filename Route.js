import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bookings from './Booking';
import Profile from './Profile';

export default function Root() {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="My Bookings" component={Bookings} />
      <Tab.Screen name="My Profile" component={Profile} />
    </Tab.Navigator>
  );
}
