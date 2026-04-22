const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const chatSocket = require("./sockets/chatSocket");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// conectar sockets
chatSocket(io);

server.listen(3001, () => {
  console.log("Servidor corriendo en puerto 3001");
});