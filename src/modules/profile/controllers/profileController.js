const status = async (request, response) => {
    response.status(200).json({message:"Profile module is working fine."});
};

const profile = async (request, response) => {

};

module.exports = {
    status,
    profile
};