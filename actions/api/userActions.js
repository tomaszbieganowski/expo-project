const User = require('../../db/models/user')
const bcrypt = require('bcrypt')

class userActions 
{
    saveUser(req, res ) {
        
        var userName = req.body.name;
        var userPass = req.body.password;
        var userPass2 = req.body.password2;
        var userMail = req.body.email;

        let errors = [];

        //walidacja
        if(!userName || !userPass || !userMail || !userPass2)
        {
            errors.push({msg: 'Please fill in all fields'});
        }
        //sprawdzenie hasel
        if(userPass != userPass2)
        {
            errors.push({msg: 'Password do not match'});
        }

        //sprawdzenie dlugosci hasla
        if(userPass.length < 6)
        {
            errors.push({msg: 'Password should be at least 6 characters'});
        }

        if(errors.length > 0)
        {
            res.render('register.ejs',{
                errors,
                userName,
                userMail,
                userPass,
                userPass2
            });
        }
        else
        {
            User.findOne({email: userMail})
            .then ((user) => {
                if(user){
                    errors.push({msg: 'Email is already registered'});
                    res.render('register.ejs',{
                        errors,
                        userName,
                        userMail,
                        userPass,
                        userPass2
                    });
                }
                else
                {
                    const newUser = new User();

                    newUser.name = userName;
                    newUser.email = userMail;

                    //hash password
                    newUser.password = bcrypt.hashSync(userPass, 10); 
                    
                    //save user
                    newUser.save()        
                    .then(() => {
                        res.redirect('/users/login');
                        return res.status(200);
                    })
                    .catch((err) => console.log(err));
                }
            }) 
        }
    }
}

module.exports = new userActions();