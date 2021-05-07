const express = require('express');
const config = require('./config');
const apiRouter = require('./routes/api');
const usersRouter = require('./routes/users');
const expressLayouts = require('express-ejs-layouts');
var flash = require('connect-flash');
var session = require('express-session');
const passport = require('passport');

const app = express();

// passport config 
require('./passport_config')(passport);

//db
require('./db/mongoose');

//ejs
// app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

//parsery
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// sesje
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//connect flash
app.use(flash());

//globale vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

//routers
app.use('/', apiRouter);
app.use('/users', usersRouter);

app.listen(config.port, function(){
    console.log('serwer slucha... http://localhost:' + config.port)
})