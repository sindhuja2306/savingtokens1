const jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');

const JWT_SECRET = 'your_jwt_secret';
const ENCRYPTION_KEY = 'your_encryption_key';

const encrypt = (payload) => {
  // encrypt the payload and return token
  const token = jwt.sign(payload,JWT_SECRET);
  const encrypted = CryptoJS.AES.encrypt(token,ENCRYPTION_KEY).toString();

  return encrypted;
}


const decrypt = (token) => {
  try {
    const bytes = CryptoJS.AES.decrypt(token, ENCRYPTION_KEY);
    const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);

    
    const decoded = jwt.verify(decryptedToken, JWT_SECRET);

    return decoded;
  } catch (err) {
    console.error('Decryption or verification failed:', err.message);
    return null;
  }
  // return decoded payload
}

module.exports = {
  encrypt,
  decrypt
}
