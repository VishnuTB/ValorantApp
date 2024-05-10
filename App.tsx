
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import { AppTheme } from './src/common/theme';
import AppNavigation from './src/presentation/AppNavigation';


function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <ThemeProvider theme={AppTheme}>
        <AppNavigation />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
