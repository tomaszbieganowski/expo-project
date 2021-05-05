const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.dbURI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})  
    .then((result) => console.log('connected'))
    .catch((err) => console.log(err));