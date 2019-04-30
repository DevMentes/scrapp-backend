class GetUserProfileService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(userId) {
    const foundedUser = await this.userRepository.byId(userId);

    if (foundedUser && foundedUser.error) {
      return foundedUser;
    }

    return {
      id: foundedUser.id,
      email: foundedUser.email
    }
  }
}

module.exports = GetUserProfileService;
