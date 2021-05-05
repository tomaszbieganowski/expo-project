const express = require('express');
const router = express.Router(); 

const userActions = require('../actions/api/users');

router.get ('/', userActions.saveUser)

module.exports = router;
