const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(cors());

const { addUser, removeUser, getUser, getUsersInRoom } = require('./chatusers');

const router = require('./router');
app.use(router);

// const escape = require('escape-html');

// const helmet = require('helmet')
// app.use(helmet());

io.on('connect', (socket) => {
    console.log('New connection!');

    socket.on('join', ({ name, room }, callback) => {
        // console.log(name, room);
        const { error, user } = addUser({ id: socket.id, name, room });

        if (error) return callback(error);

        socket.join(user.room);

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}`});
        // broadcast lets everyone except oneself know the message!
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined!`});

        // io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });
        // io.to(user.room).emit('roomData', { room: user.name, users: getUsersInRoom(user.room) });

        callback();
    });

    socket.on('disconnect', () => {
        console.log('User has left!!');
        const user = removeUser(socket.id);
        io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left.` });
    })
})

server.listen(4000, (error) => {
    if (error) {
        console.log(error)
    }
    console.log('Server running on port 4000');
});
