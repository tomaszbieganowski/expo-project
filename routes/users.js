const express = require('express');
const router = express.Router(); 

const userActions = require('../actions/api/userActions');

//add users to db
router.post('/register', userActions.saveUser);

//login 
router.post('/login', userActions.loginUser);

//logout
router.get('/logout', userActions.logoutUser);

//rejestration page
router.get('/register', (req, res) => {
    res.render('register.ejs');
});

//Login page
router.get('/login', (req, res) => {
    res.render('login.ejs');
});

module.exports = router;
