import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

import axios from 'axios';
import InputField from '../components/InputField';
import ButtonPrimary from '../components/ButtonPrimary';
import colors from '../utils/colors';
export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/;
    if (!username.trim()) newErrors.username = 'Username is required';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!phoneRegex.test(phone)) newErrors.phone = 'Enter a valid 10-digit phone number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      const payload = {
        username: username.trim(),
        phone_number: phone.trim(),
      };
      const LAN_IP = '192.168.215.61';
      const BASE_URL = Platform.select({
        ios: `http://${LAN_IP}:5000/api/auth`,
        android: `http://${LAN_IP}:5000/api/auth`,
        default: `http://${LAN_IP}:5000/api/auth`,
      });

      const response = await axios.post(`${BASE_URL}/login`, payload);
      const data = response?.data || {};

      if (data.success) {
        Alert.alert('Success', data.message || 'OTP sent to your phone number');
        navigation.navigate('Home', { phone: payload.phone_number, from: 'Login' });
      } else {
        Alert.alert('Login failed', data.message || 'Unexpected response from server.');
      }
    } catch (error) {
      const msg = error?.response?.data?.message || error?.message || 'Invalid username or phone number';
      Alert.alert('Error', msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Login</Text>
      </View>

      {/* Username */}
      <InputField
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={errors.username && styles.inputError}
      />
      {errors.username && <Text style={styles.error}>{errors.username}</Text>}

      {/* Phone */}
      <InputField
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        style={errors.phone && styles.inputError}
      />
      {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

      {/* Send OTP */}
      <ButtonPrimary
        title={loading ? 'Loading...' : 'Login'}
        onPress={handleLogin}
        disabled={loading}
      />

      <Text style={styles.linkText}>
        Don’t have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.replace('Signup')}>
          Sign up
        </Text>
      </Text>
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
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.textLight,
  },
  inputError: {
    borderColor: colors.error,
  },
  error: {
    color: colors.error,
    fontSize: 13,
    marginTop: 4,
    marginLeft: 4,
  },
  linkText: {
    textAlign: 'center',
    color: colors.textLight,
    marginTop: 14,
  },
  link: {
    color: colors.accent,
    fontWeight: '600',
  },
});
