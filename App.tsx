
import React from 'react';
import {
  useColorScheme
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/presentation/AppNavigation';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}

export default App;
