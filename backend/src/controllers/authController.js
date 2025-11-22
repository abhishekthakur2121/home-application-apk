import User from '../models/User.js';
import Otp from '../models/Otp.js';
import { generateOtp, expiryFromNow } from '../utils/otp.js';

const maskPhone = (phone) => phone.replace(/\d(?=\d{2})/g, '*');

export const signup = async (req, res, next) => {
  try {
    const { username, phone_number } = req.body;
    if (!username || !phone_number) {
      res.status(400);
      throw new Error('username and phone_number are required');
    }

    let user = await User.findOne({ phone_number });
    if (!user) {
      user = await User.create({ username, phone_number });
    }

    const code = generateOtp();
    const expiresAt = expiryFromNow(5);
    await Otp.findOneAndUpdate(
      { phone_number },
      { code, expiresAt, attempts: 0 },
      { upsert: true, new: true }
    );

    console.log(`[OTP] Signup OTP for ${phone_number} -> ${code}`);
    return res.status(201).json({ success: true, message: `OTP sent to ${maskPhone(phone_number)}` });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { username, phone_number } = req.body;
    if (!username || !phone_number) {
      res.status(400);
      throw new Error('username and phone_number are required');
    }

    const user = await User.findOne({ phone_number });
    if (!user) {
      res.status(404);
      throw new Error('User not found. Please sign up.');
    }

    const code = generateOtp();
    const expiresAt = expiryFromNow(5);
    await Otp.findOneAndUpdate(
      { phone_number },
      { code, expiresAt, attempts: 0 },
      { upsert: true, new: true }
    );

    console.log(`[OTP] Login OTP for ${phone_number} -> ${code}`);
    return res.status(200).json({ success: true, message: `OTP sent to ${maskPhone(phone_number)}` });
  } catch (err) {
    next(err);
  }
};

export const verifyOtp = async (req, res, next) => {
  try {
    const { phone_number, otp } = req.body;
    if (!phone_number || !otp) {
      res.status(400);
      throw new Error('phone_number and otp are required');
    }

    const record = await Otp.findOne({ phone_number });
    if (!record) {
      res.status(400);
      throw new Error('OTP not found. Please request again.');
    }

    if (record.expiresAt < new Date()) {
      await Otp.deleteOne({ phone_number });
      res.status(400);
      throw new Error('OTP expired. Please request a new one.');
    }

    if (record.code !== otp) {
      record.attempts += 1;
      await record.save();
      res.status(400);
      throw new Error('Invalid OTP');
    }

    await Otp.deleteOne({ phone_number });
    return res.json({ success: true, message: 'OTP verified' });
  } catch (err) {
    next(err);
  }
};

export const resendOtp = async (req, res, next) => {
  try {
    const { phone_number } = req.body;
    if (!phone_number) {
      res.status(400);
      throw new Error('phone_number is required');
    }

    const code = generateOtp();
    const expiresAt = expiryFromNow(5);
    await Otp.findOneAndUpdate(
      { phone_number },
      { code, expiresAt, attempts: 0 },
      { upsert: true, new: true }
    );

    console.log(`[OTP] Resend OTP for ${phone_number} -> ${code}`);
    return res.json({ success: true, message: 'OTP resent' });
  } catch (err) {
    next(err);
  }
};
