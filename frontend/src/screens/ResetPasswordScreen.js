import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import InputField from '../components/InputField';
import ButtonPrimary from '../components/ButtonPrimary';
import colors from '../utils/colors';

export default function ResetPasswordScreen({ navigation }) {
  const [identifier, setIdentifier] = useState(''); // email or phone
  const [newPassword, setNewPassword] = useState('');

  const handleReset = () => {
    // TODO: Django reset password API
    // Example:
    // axios.post('/api/reset-password/', {
    //   email_or_phone: identifier,
    //   new_password: newPassword,
    // });

    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Reset Password</Text>

      <InputField
        placeholder="Email or Phone Number"
        value={identifier}
        onChangeText={setIdentifier}
      />

      <InputField
        placeholder="New Password"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />

      <ButtonPrimary title="Reset" onPress={handleReset} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.textLight,
    textAlign: 'center',
    marginBottom: 20,
  },
});
