import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';
import ForgotPassword from '../screens/auth/ForgotPassword';
import { AuthStackParamList } from '../types/navigator';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'SignIn'}
    >
      <Stack.Screen name={'SignIn'} component={SignIn} />
      <Stack.Screen name={'SignUp'} component={SignUp} />
      <Stack.Screen name={'ForgotPassword'} component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
