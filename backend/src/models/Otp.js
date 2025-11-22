import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema(
  {
    phone_number: { type: String, required: true, index: true },
    code: { type: String, required: true },
    expiresAt: { type: Date, required: true },
    attempts: { type: Number, default: 0 },
  },
  { timestamps: true }
);

otpSchema.index({ phone_number: 1 }, { unique: true });

export default mongoose.model('Otp', otpSchema);
