const router = require('express').Router();
const User = require('../../models/user');

// @ api/sessions

router.get("/setsession", (req, res) => {
    const sessionuser = req.session.user;
    console.log('Session set:', sessionuser)
    res.send("OK");
});

router.get("/getsession", (req, res) => {
    console.log('get sess: ', req.session.user );
    res.send({ user_id: req.session.user });
});

router.get("/getsessionuser", async (req, res) => {
    const fullUser = await User.findById(req.session.user);
    console.log(fullUser); 
    res.send({ user: fullUser });
});

router.get("/destroysession", (req, res) => {
    res.send({ response: "Logged out", status: 200 });
    req.session.destroy(function(err) {
    });
});

module.exports = router;