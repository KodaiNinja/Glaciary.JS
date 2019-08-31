module.exports.http = function (req, res) {
    res.send("Hello"); // This is a route which say hello on every access on localhost:yourport/.
}

module.exports.socket = function (socket) {
    socket.emit('Hello'); // This is an event which say hello to every new connected client.
}

