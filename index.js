const crypto = require('crypto');

// Generate a 32-byte key (64 characters in hex)
const jwtSecret = crypto.randomBytes(32).toString('hex');

// Generate a 32-byte key (64 characters in hex)
const jwtRefreshSecret =  crypto.randomBytes(32).toString('hex');

console.log(`JWT_SECRET=${jwtSecret}`);
console.log(`JWT_REFRESH_SECRET=${jwtRefreshSecret}`);
