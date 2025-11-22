// import axios from 'axios';
// import { Platform } from 'react-native';
//
// const LAN_IP = '192.168.215.61';
// const BASE_URL = Platform.select({
//   ios: 'http://localhost:5000/api/auth',
//   android: 'http://10.0.2.2:5000/api/auth',
//   default: `http://${LAN_IP}:5000/api/auth`,
// });
//
// export const signupUserApi = async (data) => {
//   const res = await axios.post(`${BASE_URL}/signup`, data);
//   return res.data;
// };
//
// export const verifyOtpApi = async (data) => {
//   const res = await axios.post(`${BASE_URL}/verify-otp`, data);
//   return res.data;
// };
//
// export const loginUserApi = async (data) => {
//   const res = await axios.post(`${BASE_URL}/login`, data);
//   return res.data;
// };
//
// export const resendOtpApi = async (data) => {
//   const res = await axios.post(`${BASE_URL}/resend-otp`, data);
//   return res.data;
// };
