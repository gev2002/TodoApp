import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigations/MainNavigation';

function Navigation() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default Navigation;
