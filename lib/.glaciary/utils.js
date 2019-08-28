const debug = require('./debug/debug');
const io = require('socket.io-client');
const socket = io('http://localhost:3212');

module.exports = {
    print(data) {
        debug(data);
        socket.emit('print', data);
    },
    serverOnline(port) {
        debug(port);
        socket.emit('serverOnline', port);
    },
    debugOut(data){
        socket.emit('print', data);
    }
}