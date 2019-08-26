const io = require('socket.io-client');
const socket = io('http://localhost:3212');

module.exports = {
    print(data) {
        socket.emit('print', data);
    },
    serverOnline(port){
        socket.emit('serverOnline', port);
    }
}