

const socketController = (socket) => {
    // console.log("Cliente conectado", socket.id);

    socket.on("disconnect", () => {
        console.log('Cliente desconetado', socket.id);
    })

    //Se crea el evento de escucha y en el payload está el mensaje enviado por el cliente
    socket.on('enviar-mensaje', (payload, callback) => {

        //* En esta linea se emite un evento desde el servidor hacia los clientes
        // this.io.emit('enviar-mensaje', payload);
        
        const id = 1234;
        callback(id);
        //* Broadcast sirve para enviar informacion a todos los clientes conectados, menos al que hizo la peticion
        socket.broadcast.emit('enviar-mensaje', payload);

    })
};

module.exports = {
    socketController
}