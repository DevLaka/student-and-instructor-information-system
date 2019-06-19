const express = require('express');

const Router = express.Router();

Router.get('/', function (req, res) {
    res.json({message: 'Student and Instructor Information System'});
});

module.exports = Router;
