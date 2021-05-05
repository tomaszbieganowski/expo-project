const User = require('../../db/models/user')

module.exports = 
{
    saveUser(req, res ){

        const newUser = new User({
            name: 'User',
            surname: 'Number2',
            email: 'user@gmail.com',
            phone: 123123390
        })

        newUser.save().then(() => {
            console.log('dodano nowego uzytkownika');
        })

        res.send('strona glowna dziala!')
    }
}