module.exports = class UserGetAllProjectsUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(userId) {
        return await this.userRepository.projects(userId);
    }
};