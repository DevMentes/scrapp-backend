const userRepository = require('./../repositories/userRepository');
const GetUserProfileService = require('./../services/GetUserProfileService');

module.exports = async (request, response) => {

  const service = new GetUserProfileService(userRepository);

  const loggedUser = await service.execute(request.user.id);

  if (loggedUser && loggedUser.error) {
    response.status(400).json({error: loggedUser.error});
  }

  response.status(200).json({data: { profile:loggedUser}});

  response.status(200).json({message: 'testing this shet!'});
};
