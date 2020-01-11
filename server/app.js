const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./config/db');
const session = require("express-session");

var cors = require('cors');
app.use(cors());

// Connect to Mongo
connectDB();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// express session
app.use(session({
    secret: 'this is a much better secret than the one in the documentation',
    resave: false,
    saveUninitialized: true,
}));

// include routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/sessions', require('./routes/api/sessions'));

// catch 404 and forward to error handler
// app.use( (req, res, next) => {
//   var err = new Error('File Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// define as the last app.use callback
// app.use( (err, req, res, next) => {
//   res.status(err.status || 500);
//   res.send(err.message);
// });

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));