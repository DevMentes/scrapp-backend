module.exports = class GetUserProfileUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(userId) {
        const userProfile = await this.userRepository.byId(userId);
        return {
            id: userProfile.id,
            email: userProfile.email
        }
    }
};