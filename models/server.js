const express = require('express')
const cors = require('cors');
const { socketController } = require('../sockets/controller');


class Server {

    constructor() {
        this.app     = express();
        this.port    = process.env.PORT;
        //* Este server sera el que esté escuchando
        this.server  = require('http').createServer(this.app);
        this.io      = require('socket.io')(this.server);

        this.paths = {};

        this.middlewares();

        this.routes();

        this.sockets();
    }

    async conectarDB() {
        await dbConnection()
    }

    middlewares() {

        //Cors
        this.app.use(cors());

        //Directorio publico
        this.app.use( express.static('public') );

       
    }

    routes() {

        //La ruta que se pone puede ser cualquiera
        // this.app.use(this.paths.auth, require('../routes/auth'))
    }

    sockets() {

        this.io.on("connection", socketController);

    }

    listen() {
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port)
        })
    }
}

module.exports = Server;