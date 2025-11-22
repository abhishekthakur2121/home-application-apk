import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true },
    phone_number: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

userSchema.index({ phone_number: 1 }, { unique: true });

export default mongoose.model('User', userSchema);
