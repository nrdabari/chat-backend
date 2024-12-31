const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
 console.log('A user connected');
socket.on('chat message', (msg) => {
 io.emit('chat message', msg); 
 });
socket.on('disconnect', () => {
console.log('A user disconnected');
});
});

server.listen(8080, () => {
 console.log('Server is running on http://localhost:8080');
});




