const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const Profile = require('../../models/profile');

// @route    GET api/profile?house=myHouse
// @desc     Create or update user profile
// @access   Private
router.get('/', async (req, res) => {
    const house = req.query.house;
    console.log(house);
    // let user = req.session.user;
    try {
        let profile = await User.findOne({ user: req.session.user });
        if(profile) {
            // Update profile
            profile = await User.findOneAndUpdate({ user: req.session.user }, { $set: {'house': house} }, { new: true });
            return res.json(profile);
        }
    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server error.');
    }
})

// @route    GET api/profile/user/:user_id
// @desc     Gets profile by id
// @access   Private
router.get('/user', async (req, res) => {
    try {  
        const id = req.params.id;
        const user = await User.findOne({ user: req.params.id });
        console.log(user); 
        
        if (user) {
            return res.status(200).json({ response: "User is found!" });

        } else {
            console.log('Profile not found')
            return res.status(400).json({ response: 'Profile not found' });
        }
        
    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server error.');
    }
  })

// @route    GET api/profile/user/:user_id
// @desc     Gets profile by id
// @access   Private
// router.get('/user/:user_id', async (req, res) => {
//     try {  
//         const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['username', 'email']);
        
//         if(!profile) return res.status(400).json({ response: 'Profile not found' });
        
//         res.status(200).json(profile);

//     } catch(err) {
//         console.log(err.message);
//         if(err.kind == 'ObjectId') {
//             return res.status(400).json({ response: 'Profile not found' });
//         }
//         res.status(500).send('Server error.');
//     }
//   })

module.exports = router;