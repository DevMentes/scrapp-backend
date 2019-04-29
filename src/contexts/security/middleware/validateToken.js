const jwtAuthAdapter = require('./../adapters/jwtAuthAdapter');
const config = require('./../config');

validateToken = (req, res, next) => {

  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    res.status(401).json({
      error: 'Unauthorized'
    });
  }

  if (authorizationHeader.slice(0, 7) !== 'Bearer ') {
    res.status(401).json({
      error: 'Unauthorized'
    });
  }

  const jwt = authorizationHeader.split( '')[1];

  if (!jwt) {
    res.status(401).json({
      error: 'Unauthorized'
    });
  }

  jwtAuthAdapter.validateToken(jwt, config.secret)
    .then((decodedToken) =>
    {
      req.user = decodedToken.data;
      next();
    })
    .catch(() =>
    {
      res.status(401)
        .json({message: "Invalid auth token provided."})
    });
};

module.exports = validateToken;
