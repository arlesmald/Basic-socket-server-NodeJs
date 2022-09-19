const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMessage = document.querySelector('#txtMessage')
const btnEnviar = document.querySelector('#btnEnviar')

const socket = io();

socket.on("connect", () => {
    console.log("conectado");

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

})

socket.on("disconnect", () => {
    console.log("Desconectado del servidor")
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
})

//* Aqui se escucha el evento enviar-mensaje en caso que el servidor lo emita y se recibe el payload
socket.on("enviar-mensaje", (payload) => {
    console.log(payload)
})

btnEnviar.addEventListener('click', () => {
    
    const mensaje =txtMessage.value;
    const payload = {
        mensaje: mensaje,
        date: new Date().getDate(),
        id: 'e32ewrwer32r'
    }

    //La funcion que aqui se envia, la recibe el servidor como callbak 
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log("Enviado desde el server", id);
    });
})