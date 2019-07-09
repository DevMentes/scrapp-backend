const projectsOfUser = async (userId) => {
    return [
        {
            id: '123123123131',
            name: 'project 1',
            role: 'Product Owner',
            status: 'open'
        },
        {
            id: '352q525241',
            name: 'project 2',
            role: 'Developer',
            status: 'open'
        },
        {
            id: '3525426262',
            name: 'project 3',
            role: 'Product Owner',
            status: 'open'
        },
        {
            id: '246532636362',
            name: 'project 4',
            role: 'Product Owner',
            status: 'finished'
        },
        {
            id: '352646353',
            name: 'project 5',
            role: 'Scrum Master',
            status: 'finished'
        },
        ];
};
module.exports = {
    projectsOfUser
};