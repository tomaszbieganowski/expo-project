module.exports = {
    port: process.env.PORT || 3000,
    dbURI: 'mongodb+srv://admin:test123@greennovention.qqoit.mongodb.net/expoDB?retryWrites=true&w=majority',

    //secure auth session
    ensureAuthenticated: function(req, res, next) {
        if (req.isAuthenticated()) {
          return next();
        }
        else
        {
        req.flash('error_msg', 'Please log in to view this resource');
        res.redirect('/users/login');
        }
    }
};