const express = require('express');
const router = express.Router();
const User = require('../../models/user');

// @route    GET api/auth/getuser
// @desc     Gets logged in user
// @access   Private
router.get('/getuser', async (req, res) => {
    try {
        const user = await User.findById(req.session.user).select('-password');
        // const user = await User.findById(req.user.id);
        res.status(200).send(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
})

// @route    POST api/auth
// @desc     Logs in users
// @access   Public
router.post('/', (req, res, next) => {
    if (req.body.loginEmail && req.body.loginPassword) {
      User.authenticate(req.body.loginEmail, req.body.loginPassword,(error, user) => {
        if (error || !user) {
          console.log('Wrong email or password');
          return res.status(401).json({ response: "Wrong email or password." });
        } else {
              // set session
              req.session.user = user._id;
              console.log('Logged in with session:', req.session.user);
              res.status(200).json({ response: "Logged in" });
            }
      })
    } else {
      console.log('All fields are required!');
      res.status(400).json({ response: "Fields can not be empty" });
    }
  });

module.exports = router;