const router = require('express').Router();
const User = require('../../models/user');
const express = require('express');
const bodyParser = require('body-parser');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');

router.get('/', (req, res) => {
  res.send('Users route!')
})

// @route    POST api/users
// @desc     Registers users
// @access   Public
router.post('/', (req, res, next) => {
    // confirm that user typed same password twice
    if (req.body.password !== req.body.confirmpassword) {
      var err = new Error('Passwords do not match.');
      console.log('Passwords dont match');
      return res.status(401).json({ response: "Password and confirmation does not match" });
    }
  
    if (req.body.email &&
      req.body.username &&
      req.body.password &&
      req.body.confirmpassword) {
  
      var userData = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        house: '',
        patronus: ''
    }
  
    User.create(userData, (error, user) => {
        if (error) {
          return next(error);
        } else {
          req.session.user = user._id;
          res.status(200).json({ response: req.body.username + " was successfully created with session: " + req.session.user });
          console.log('Created a user');
          // return res.status(200).json({ response: req.body.username + " was successfully created."});
        }
    });
  
    } else {
            console.log('All fields are required!');
            res.status(400).json({ response: "Fields can not be empty" });
        }
});
  
  module.exports = router;