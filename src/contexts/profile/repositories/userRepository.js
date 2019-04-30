const User = require('./../models/User');
const { infrastructureErrors } = require('./../errors/errors');


const byId = async (id) => {
  return User.findByPk(id)
    .then(user => {
      return user;
    })
    .catch(error => {
      return {
        error: infrastructureErrors.DatabaseError(error)
      }
    });
};

module.exports = {
  byId
};
