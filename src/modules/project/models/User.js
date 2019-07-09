const User = mongoose.model(
    'user',
    {
        id: 'awiskjfaoi',
        name: 'usuario 1',
        email: 'usuario1@email.com',
        projects: [
            {
                id: '123123123131',
                name: 'project 1',
                role: 'Product Owner',
                status: 'open'
            }
        ]
    }
);

module.exports = User;