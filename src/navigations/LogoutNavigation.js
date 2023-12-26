import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../components/services/Welcome';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import VerificationScreen from '../screens/VerificationScreen';

const Stack = createNativeStackNavigator();
function LogoutNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="VerificationScreen" component={VerificationScreen} />

    </Stack.Navigator>
  );
}

export default LogoutNavigation;
