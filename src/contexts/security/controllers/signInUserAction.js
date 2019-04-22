const { validationErrors } = require('./../errors/errors');
const userRepository = require('./../repositories/userRepository');
const LoginUserService = require('./../services/RegisterUserService');
const cryptographyAdapter = require('../adapters/cryptographyAdapter');


module.exports = async (request, response) => {

  const {email, password} = request.body;

  if (!email || email === '') {
    response.status(400).json(validationErrors.RequiredField('Email'))
  }

  if (!password || password === '') {
    response.status(400).json(validationErrors.RequiredField('Password'));
  }

  if (password.length < 8) {
    response.status(400).json(validationErrors.InvalidPassword(password));
  }

  const service = new LoginUserService(
    cryptographyAdapter,
    userRepository
  );

  const authenticatedUser = service.execute(email, password);

  if (!authenticatedUser || authenticatedUser.error) {
    response.status(500).json(authenticatedUser);
  }

  response.status(500).json(authenticatedUser);

};
