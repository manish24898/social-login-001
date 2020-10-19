`use strict`;

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const {PORT} = require('../config/server');
const routes = require('../routes/bin');
const passport = require('passport');

// invoke an instance of express application.
let app = express();


// set morgan to log info about our requests for development use.
app.use(morgan('dev'));

// Passport intialization
app.use(passport.initialize());
app.use(passport.session());

// CORS Header setting
app.all("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, x-request-with");
  res.header("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, OPTIONS");
  res.header("Access-Control-Max-Age", "1800");
  next();
});

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));

// Run server
module.exports = () => {
    app.listen(PORT, async () => {
        const {googleStrategy} = require('../services/passportService');
        await googleStrategy(passport);
        routes(app, passport);
        console.log(`Server is running on port ${PORT}...`);
    })
}