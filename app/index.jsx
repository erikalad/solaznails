import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import CalendarScreen from './screens/CalendarScreen';
import ClienteFromScreen from './screens/ClienteFromScreen';
import GalleryScreen from './screens/GalleryScreen'
import ClientasScreen from './screens/ClientasScreen';

const Stack = createStackNavigator();

export default function IndexScreen() {
  return (
    <Stack.Navigator initialRouteName="init">
      <Stack.Screen name="init" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Calendar" component={CalendarScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ClienteFrom" component={ClienteFromScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Clientas" component={ClientasScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Gallery" component={GalleryScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}