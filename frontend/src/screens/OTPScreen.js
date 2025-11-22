import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import axios from 'axios';
import ButtonPrimary from '../components/ButtonPrimary';
import colors from '../utils/colors';

export default function OTPScreen({ navigation, route }) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
  const phoneNumber = route?.params?.phone || ''; 
  
  // Handle OTP Input Change
  const handleChange = (text, index) => {
    if (/^\d*$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (text && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle OTP Verification
  const handleVerify = async () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length < 6) {
      alert('Please enter the complete 6-digit OTP');
      return;
    }

    try {
      const LAN_IP = '192.168.215.61';
      const BASE_URL = Platform.select({
        ios: `http://${LAN_IP}:5000/api/auth`,
        android: `http://${LAN_IP}:5000/api/auth`,
        default: `http://${LAN_IP}:5000/api/auth`,
      });

      const response = await axios.post(`${BASE_URL}/verify-otp`, {
        otp: enteredOtp,
        phone_number: phoneNumber,
      });
      const data = response?.data || {};

      if (data.success) {
        navigation.replace('Home');
      } else {
        alert(data.message || 'Invalid or expired OTP');
      }
    } catch (error) {
      console.error('OTP Verification Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  // Resend OTP
  const handleResend = async () => {
    try {
      const LAN_IP = '192.168.215.61';
      const BASE_URL = Platform.select({
        ios: `http://${LAN_IP}:5000/api/auth`,
        android: `http://${LAN_IP}:5000/api/auth`,
        default: `http://${LAN_IP}:5000/api/auth`,
      });

      const response = await axios.post(`${BASE_URL}/resend-otp`, { phone_number: phoneNumber });
      const data = response?.data || {};

      alert(data.message || 'OTP resent successfully!');
    } catch (error) {
      console.error('Resend OTP Error:', error);
      alert('Could not resend OTP. Please try again later.');
    }
  };

  return (
    
    <View style={styles.container}>

      <View style={styles.logoContainer}>
        <Text style={styles.appName}>Home-Buddy</Text>
      </View>

      
      <Text style={styles.heading}>Verify OTP</Text>
      <Text style={styles.subText}>
        Please enter the 6-digit code sent to your registered number
      </Text>
        
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={styles.otpBox}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace' && index > 0 && !otp[index]) {
                inputRefs.current[index - 1].focus();
              }
            }}
          />
        ))}
      </View>

    
      <ButtonPrimary title="Verify OTP" onPress={handleVerify} />

      <Text style={styles.resendText}>
        Didn’t receive the code?{' '}
        <Text style={styles.resendLink} onPress={handleResend}>
          Resend OTP
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  appName: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.primary,
    letterSpacing: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.textDark,
    textAlign: 'center',
    marginBottom: 8,
  },
  subText: {
    textAlign: 'center',
    color: colors.textLight,
    marginBottom: 30,
    fontSize: 15,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  otpBox: {
    width: 48,
    height: 55,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: colors.accent,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: colors.textDark,
    backgroundColor: colors.white,
    elevation: 2,
  },
  resendText: {
    textAlign: 'center',
    color: colors.textLight,
    marginTop: 16,
  },
  resendLink: {
    color: colors.primary,
    fontWeight: '600',
  },
});
