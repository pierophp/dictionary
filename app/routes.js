
module.exports = function (app) {
    app.use('/', require('./controllers/indexController'));
    app.use('/letters', require('./controllers/lettersController'));
    app.use('/words', require('./controllers/wordsController'));
    app.use('/admin/words', require('./controllers/adminWordsController'));


    /*
        app.use('/unihan', isAuthenticated, require('./controllers/UnihanController'));
    
        function isAuthenticated(req, res, next) {
    
            if (req.isAuthenticated()) {
                return next();
            }
    
            res.redirect('/');
        }
    */
}