const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const scrapper = require('../scrapper.js');

var basicAuth = require('basic-auth');

var auth = function (req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.sendStatus(401);
  };

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  };

  if (user.name === 'admin' && user.pass === 'welcome') {
    return next();
  } else {
    return unauthorized(res);
  };
};

router.use(bodyParser.urlencoded({ extended: true }));


// router.get('/sources/', function (req, res) {
//     User.find({}, function (err, users) {
//         if (err) return res.status(500).send("There was a problem finding the users.");
//         res.status(200).send(users);
//     });
// });



router.get('/', auth, function (req, res) {
    // console.log('req url: ' + req.query.url);
    // console.log('req store: ' + req.query.store);
    scrapper.ScrapperProducts(req, res);
});

module.exports = router;