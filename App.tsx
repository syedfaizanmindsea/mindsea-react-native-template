/**
 * MindSea React Native Template
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { OnboardingNavigator } from './src/navigation/Onboarding.navigator';

const App = () => {
  return (
    <NavigationContainer>
      <OnboardingNavigator />
    </NavigationContainer>
  );
};

export default App;
