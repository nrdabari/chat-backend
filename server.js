const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
       },
});

io.on('connection', (socket) => {
     socket.on('chatMessage', (msg) => {
        console.log('Message received:', msg);
        io.emit('chatMessage', msg); 
    });
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
