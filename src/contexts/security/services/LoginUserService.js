const { domainErrors } = require('./../errors/errors');

class LoginUserService {

  constructor(cryptographyAdapter,  userRepository){

    this.cryptographyAdapter = cryptographyAdapter;
    this.userRepository = userRepository;
  }

  async execute(email, password) {

    const foundedUser = await this.userRepository.byEmail(email);

    if (!foundedUser || foundedUser.error){
        return foundedUser;
    }

    if (!this.cryptographyAdapter.isSame(foundedUser.password, password)) {
      return domainErrors.BadCredentials(email, password);
    }

    return {
      id: foundedUser.id,
      email: foundedUser.email
    };
  }
}

module.exports = LoginUserService;