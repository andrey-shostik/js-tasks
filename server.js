const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:7070');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

const connections = [];

app.get('/room', function (req, res) {
  let data = io.sockets.adapter.rooms['game-room'];

  if (data === undefined) {
    data = { data: null };
  }

  res.json(data);
});

io.on('connection', function(socket) {
  connections.push(socket);
  console.log('connected ', connections.length, ' ' + socket.id);

  (function (callback) {
    socket.on('join', function (roomName) {
      socket.join(roomName);
      callback();
    });
  })(function () {
    console.log(io.sockets.adapter.rooms['game-room']);
    if (io.sockets.adapter.rooms['game-room'].length == 2) {
      socket.broadcast.to('game-room').emit('game-ready');
      console.log('ready');
      socket.emit('game-ready');
    }
  });

  socket.on('disconnect', function () {
    connections.pop();
    console.log('disconnected', connections.length, '' + socket.id);
  });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});
