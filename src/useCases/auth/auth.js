const jwt = require('jsonwebtoken');
const secretKey = require('../../secret/secret');

const authenticate = (_id) => {
  const token = jwt.sign({ _id }, secretKey, { expiresIn: '1d' });
  
  return token;
}

module.exports = authenticate;