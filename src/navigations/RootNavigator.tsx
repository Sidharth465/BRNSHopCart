import { View, Text } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthState } from '../stores/auth-store';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

export type RootStackParamList = {
  Auth: undefined;
  App: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: FC = () => {
  const [isInitializing, setInitialized] = useState(true);
  const { isAuthenticated } = useAuthState();
  console.log('isAuthenticated', isAuthenticated);
  useEffect(() => {
    setInitialized(false);
  }, [isAuthenticated]);

  if (isInitializing) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Initializing...</Text>
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="App" component={AppNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
