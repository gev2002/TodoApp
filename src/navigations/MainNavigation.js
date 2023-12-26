import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogoutNavigation from './LogoutNavigation';
import LoginNavigation from './LoginNavigation';

const Stack = createNativeStackNavigator();
function MainNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="LogoutNavigation"
      screenOptions={{
        headerShown: false,
        statusBarHidden: true,
      }}
    >
      <Stack.Screen name="LogoutNavigation" component={LogoutNavigation} />
      <Stack.Screen name="LoginNavigation" component={LoginNavigation} />
    </Stack.Navigator>
  );
}

export default MainNavigation;
