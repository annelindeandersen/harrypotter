const mongoose = require('mongoose');
 
const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    house: {
        type: String,
        required: false,
        minlength: 4,
        maxlength: 1024
    },
    patronus: {
        type: String,
        required: false,
        minlength: 2,
        maxlength: 1024
    }
});

var Profile = mongoose.model('profile', ProfileSchema);
module.exports = Profile;