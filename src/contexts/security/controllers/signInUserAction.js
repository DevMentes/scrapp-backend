const { validationErrors } = require('./../errors/errors');
const userRepository = require('./../repositories/userRepository');
const LoginUserService = require('./../services/LoginUserService');
const cryptographyAdapter = require('../adapters/cryptographyAdapter');


module.exports = async (request, response) => {

  const {email, password} = request.body;

  if (!email || email === '') {
    response.status(400).json(validationErrors.RequiredField('Email'))
  }

  if (!emailIsValid(email)){
    response.status(400).json(validationErrors.InvalidEmail(email));
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

const emailIsValid = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

};
