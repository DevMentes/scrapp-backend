const User = require('./../models/User');

const { infrastructureErrors } = require('./../errors/errors');

const byId = async (userId) => {
    return User.findByPk(userId)
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