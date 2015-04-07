var express = require('express');
var passport = require('passport');
var router = express.Router();

var libs = process.cwd() + '/libs/';

var db = require(libs + 'db/mongoose');

router.post('/info',
    passport.authenticate('bearer', {
        session: false
    }),
    function(req, res) {
        res.json({
            user_id: req.user.userId,
            name: req.user.username,
            scope: req.authInfo.scope
        });
    }
);

router.post('/setpwd',
    passport.authenticate('bearer', {
        session: false
    }),
    function(req, res) {
        res.json({
            status: true,
            user_id: req.user.userId,
            name: req.user.username
        });
    }
);


router.post('/resetpwd', function(req, res) {
    res.json({
        status: true
    });
});

router.post('/forgetpwd', function(req, res) {
    res.json({
        status: true
    });
});


module.exports = router;