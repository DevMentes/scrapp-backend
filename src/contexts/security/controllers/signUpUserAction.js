const { validationErrors } = require('./../errors/errors');
const userRepository = require('./../repositories/userRepository');
const cryptographyAdapter = require('../adapters/cryptographyAdapter');
const RegisterUserService = require('../services/RegisterUserService');
const uuidGeneratorAdapter = require('./../adapters/uuidGeneratorAdapter');

const signUp = async (request, response) => {
  const { email, password } = request.body;

  if (!email || email === ''){
    response.status(400).json(validationErrors.RequiredField('Email'))
  }

  if (!emailIsValid(email)){
    response.status(400).json(validationErrors.InvalidEmail(email));
  }

  if (!password || password === ''){
    response.status(400).json(validationErrors.RequiredField('Password'));
  }

  if (password.length < 8){
    response.status(400).json(validationErrors.InvalidPassword(password));
  }

  const service = new RegisterUserService(
    cryptographyAdapter,
    uuidGeneratorAdapter,
    userRepository
  );

  const createdUser = await service.execute(email, password);

  if (createdUser.error) {
    response.status(401).json(createdUser);
  }

  response.status(201).json({
    data: createdUser
  });
};

const emailIsValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());

};

module.exports = signUp;
