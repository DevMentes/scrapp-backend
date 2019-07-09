const UserGetAllProjectsUseCase = require('./../use-cases/UserGetAllProjectsUseCase');
const userRepository = require('./../repositories/userRepository');

const status = async (request, response) => {
    response.status(200).json({message:"Projects module is working fine."});
};

const getAll = async (request, response) => {

    const logedUser = request.user;

    const service = new UserGetAllProjectsUseCase(userRepository);
    const projects =  await service.execute(logedUser.id);

    if (projects.error) {
        response.status(400).json(projects);
    }

    response.status(200).json({data: projects})
};

module.exports = {
    status,
    getAll
};