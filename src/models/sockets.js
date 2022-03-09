class Sockets {
  constructor(io) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on('connection', (socket) => {
      // Escuchar evento: mensaje-to-server
      socket.on('mensaje-to-server', (data) => {
        this.io.emit('mensaje-from-server', data);
      });

      socket.on('mensaje-del-cliente', (data) => {
        this.io.emit('mensaje-del-server', data);
      });
    });
  }
}

module.exports = Sockets;
