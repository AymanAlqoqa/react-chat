const express = require('express');
const cookieParser = require('cookie-parser');
const router = require('./controller/index');
const app = express();
const server = require('http').createServer(app);
const { join } = require('path');
const socketIo = require('socket.io');
const io = socketIo(server);

io.on('connection', socket => {
  console.log('connected');
});

app.use(express.json());
app.use(cookieParser());
app.set('port', process.env.PORT || 5000);

app.use('/api/v1', router);

app.use(express.static(join(__dirname, '..', '.. ', 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'client', 'build', 'index.html'));
});

module.exports = app;
