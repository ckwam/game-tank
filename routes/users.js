var express = require('express');
var router = express.Router();
var config = require('../config');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let displayName = 'Unnamed tank';
  let thumbUrl = '';
  if (req.user) {
    displayName = req.user.displayName;
    thumbUrl = req.user.photos[0].value;
  }
  res.render('game',  { title: 'the Warlord of Tanks', displayName: displayName, thumbUrl: thumbUrl, ipAddress: config.ipAddress});
});

module.exports = router;
