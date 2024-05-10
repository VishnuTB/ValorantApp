
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import { Provider } from 'react-redux';
import { store } from './src/business/redux/store/reduxStore';
import { AppTheme } from './src/common/theme';
import AppNavigation from './src/presentation/AppNavigation';


function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider theme={AppTheme}>
          <AppNavigation />
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
