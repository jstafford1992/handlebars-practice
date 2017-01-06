'use strict';

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
  res.json("HELLO: WORLD");
});



//exports
module.exports = router;
