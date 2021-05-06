const express = require('express');
const config = require('./config');
const apiRouter = require('./routes/api');
const usersRouter = require('./routes/users');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser')

const app = express();

//db
require('./db/mongoose');

//ejs
// app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

//parsery
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routers
app.use('/', apiRouter);
app.use('/users', usersRouter);

app.listen(config.port, function(){
    console.log('serwer slucha... http://localhost:' + config.port)
})