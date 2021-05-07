const express = require('express');
const router = express.Router(); 
const { ensureAuthenticated } = require('../config');

router.get('/', (req, res) => {
    res.render('index.ejs');
});

router.get('/dashboard', ensureAuthenticated, (req, res) =>
    res.render('dashboard.ejs', {
        name: req.user.name
    }));

module.exports = router;
