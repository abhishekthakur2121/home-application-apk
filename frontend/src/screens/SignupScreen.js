import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import axios from 'axios';
import InputField from '../components/InputField';
import ButtonPrimary from '../components/ButtonPrimary';
import colors from '../utils/colors';
import { Ionicons } from '@expo/vector-icons';

export default function SignupScreen({ navigation }) {

  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/;

    if (!username.trim()) newErrors.username = 'Username is required';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!phoneRegex.test(phone))
      newErrors.phone = 'Enter a valid 10-digit phone number';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async () => {
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

      const response = await axios.post(`${BASE_URL}/signup`, payload);
      const data = response?.data || {};

      if (data.success) {
        Alert.alert('Success', data.message || 'OTP sent to your phone number');
        navigation.navigate('OTP', { phone: payload.phone_number, from: 'Signup' });
      } else {
        Alert.alert('Signup failed', data.message || 'Unexpected response from server.');
      }
    } catch (error) {
      console.log('Signup error:', error?.response?.data || error.message);
      Alert.alert('Signup failed', error?.response?.data?.message || 'Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Account</Text>

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

      {/* Continue */}
      <ButtonPrimary title={loading ? 'Sending...' : 'Send OTP'} onPress={handleSignup} disabled={loading} />

      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </Text>
    </ScrollView>
  );
}

// ---------------- STYLES ----------------
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    color: colors.textLight,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 22,
    fontWeight: '600',
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    right: 12,
  },
  flex: {
    flex: 1,
  },
  footerText: {
    textAlign: 'center',
    color: colors.textLight,
    marginTop: 20,
  },
  link: {
    color: colors.accent,
    fontWeight: '600',
  },
});
