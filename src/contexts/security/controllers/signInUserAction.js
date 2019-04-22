const { validationErrors } = require('./../errors/errors');
const userRepository = require('./../repositories/userRepository');
const LoginUserService = require('./../services/LoginUserService');
const cryptographyAdapter = require('../adapters/cryptographyAdapter');


module.exports = async (request, response) => {

  const {email, password} = request.body;

  if (!email || email === '') {
    response.status(400).json(validationErrors.RequiredField('Email'))
  }

  if (!password || password === '') {
    response.status(400).json(validationErrors.RequiredField('Password'));
  }

  const service = new LoginUserService(
    cryptographyAdapter,
    userRepository
  );

  const authenticatedUser = await service.execute(email, password);

  if (!authenticatedUser || authenticatedUser.error) {
    response.status(401).json(authenticatedUser);
  }

  response.status(200).json(authenticatedUser);
};
