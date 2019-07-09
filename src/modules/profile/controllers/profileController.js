const GetUserProfileUseCase = require('./../use-cases/GetUserProfileUseCase');
const userRepository = require('./../repositories/userRepository');

const status = async (request, response) => {
    response.status(200).json({message:"Profile module is working fine."});
};

const profile = async (request, response) => {

    const service = new GetUserProfileUseCase(userRepository);
    const logedUser = request.user;

    const userProfile = await service.execute(logedUser.id);

    if (userProfile.error) {
        response.status(401).json(userProfile);
    }

    response.status(200).json({
        data: userProfile
    })

};

module.exports = {
    status,
    profile
};