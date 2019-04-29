const jwt = require('jsonwebtoken');

const validateToken = (token, secret) => {
  return new Promise((resolve, reject) =>
  {
    jwt.verify(token, secret, (err, decodedToken) =>
    {
      if (err || !decodedToken)
      {
        return reject(err)
      }

      resolve(decodedToken)
    })
  })
};

const generateToken = (payload, secret, config) => {
    return jwt.sign(payload, secret, config);
};

module.exports = {
  validateToken,
  generateToken
};
