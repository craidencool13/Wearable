import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigation from './TabNavigation';

const MainNavigation = () => {
  const { Screen, Navigator } = createNativeStackNavigator();
  const options = {
    headerShown: false,
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Navigator initialRouteName="TabNavigation">
          <Screen
            name="TabNavigation"
            component={TabNavigation}
            {...{ options }}
          />
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainNavigation;
