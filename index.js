'use strict';

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


//ROUTES
const home = require('./routes/app.js');


//PATH FOR ROUTES
app.use('/', home);



app.listen(port, function(){
  console.log("App is listening on port: ", port);
});




//
module.exports = app;
