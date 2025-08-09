import { View, Text, StatusBar, useColorScheme } from 'react-native';
import React from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  useTheme,
} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAuthState } from './src/stores/auth-store';
import AppNavigator from './src/navigations/AppNavigator';
import RootNavigator from './src/navigations/RootNavigator';

const App = () => {
  const isDarkMode = useColorScheme() == 'dark';

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DefaultTheme}>
        <StatusBar
          barStyle={isDarkMode ? 'dark-content' : 'light-content'}
          backgroundColor={DefaultTheme.colors.background}
        />
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
