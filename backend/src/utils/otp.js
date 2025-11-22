export const generateOtp = (length = 6) => {
  let code = '';
  for (let i = 0; i < length; i++) {
    code += Math.floor(Math.random() * 10);
  }
  return code;
};

export const expiryFromNow = (minutes = 5) => {
  const d = new Date();
  d.setMinutes(d.getMinutes() + minutes);
  return d;
};
