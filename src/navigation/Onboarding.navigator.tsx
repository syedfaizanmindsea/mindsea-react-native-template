import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { BarcodeScanScreen } from 'src/screens/BarcodeScanScreen';
import { SecondScreen } from 'src/screens/SecondScreen';
import { WelcomeScreen } from 'src/screens/WelcomeScreen';

import { ROUTES } from './routes';

const Stack = createNativeStackNavigator();

export const OnboardingNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name={ROUTES.Welcome} component={WelcomeScreen} />
    <Stack.Screen name={ROUTES.Second} component={SecondScreen} />
    <Stack.Screen name={ROUTES.BarcodeScan} component={BarcodeScanScreen} />
  </Stack.Navigator>
);
