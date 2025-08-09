import { View, Text, Button } from 'react-native';
import React from 'react';
import { useAuthState } from '../../stores/auth-store';
import { useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from '../../types/navigator';

const SignIn = () => {
  const naviation = useNavigation<AuthStackParamList>();
  const { login, isLoading } = useAuthState();
  const handleLogin = async () => {
    console.log('running login');
    try {
      await login('sidharth@gmail.com', 'Test@1234');
    } catch (error) {}
  };

  console.log('isloading', isLoading);
  return (
    <View style={{ flex: 1, justifyContent: 'center', gap: 10 }}>
      <Text style={{ textAlign: 'center' }}>SignIn</Text>
      <Button
        onPress={handleLogin}
        disabled={isLoading}
        title={isLoading ? 'Signing in' : 'Sign In'}
      />
      <Button
        onPress={() => naviation.navigate('ForgotPassword')}
        title="Forgot password"
      />
    </View>
  );
};

export default SignIn;
