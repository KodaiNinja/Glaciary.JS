const io = require('socket.io')(3212);

io.on('connection', function (socket) {
    socket.on("print", function (std) {
        console.log(std);
    })
})

