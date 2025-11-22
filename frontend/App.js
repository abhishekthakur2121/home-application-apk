import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/app/store';
import AuthNavigator from './src/Navigation/AuthNavigator';

const linking = {
  prefixes: [
    'http://localhost:8081',
    'http://127.0.0.1:8081',
    'http://localhost:19006',
    'http://127.0.0.1:19006',
  ],
  config: {
    screens: {
      Home: '',
      Signup: 'signup',
      Login: 'login',
      OTP: 'otp',
      Success: 'success',
    },
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <AuthNavigator />
      </NavigationContainer>
    </Provider>
  );
}
