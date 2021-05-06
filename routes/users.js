const express = require('express');
const router = express.Router(); 

const userActions = require('../actions/api/userActions');

//add users to db
router.post('/register', userActions.saveUser);

//rejestration page
router.get('/register', (req, res) => {
    res.render('register.ejs');
});

//Login page
router.get('/login', (req, res) => {
    res.render('login.ejs');
});

module.exports = router;
