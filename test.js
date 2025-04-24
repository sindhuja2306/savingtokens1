const { encrypt, decrypt } = require('./script');

const payload = { userId: 101, role: 'admin' };

const encryptedToken = encrypt(payload);
console.log('Encrypted Token:', encryptedToken);

const decryptedData = decrypt(encryptedToken);
console.log('Decrypted Payload:', decryptedData);
