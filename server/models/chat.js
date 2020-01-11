const mongoose = require('mongoose');
 
const ChatSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    message: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 5000
    },
    room: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 5000
    }
});

var Chat = mongoose.model('Chat', ChatSchema);
module.exports = Chat;