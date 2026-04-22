module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("Usuario conectado:", socket.id);

    // enviar mensaje
    socket.on("send_message", (data) => {
      console.log("Mensaje recibido:", data);

      // reenviar a todos
      io.emit("receive_message", data);
    });

    // desconexión
    socket.on("disconnect", () => {
      console.log("Usuario desconectado:", socket.id);
    });
  });
};