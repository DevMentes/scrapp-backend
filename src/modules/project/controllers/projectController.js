const getAll = async (request, response) => {

    const service = new UserGetAllProjectsUseCase(userRepository);
    const projects =  await service.execute(userId);

    if (projects.error) {
        response.status(400).json(projects);
    }

    response.status(200).json({data: projects})
};

module.exports = {
    getAll
};