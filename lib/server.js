const chalk = require('chalk');
const io = require('socket.io')(3212);
const utils = require('./utils');


io.on('connection', function (socket) {
    socket.on("print", function (std) {
        utils.out(std);
    });
    socket.on('serverOnline', function (port) {
        // Clearing the console.
        console.clear();
        // Printing some info messages.
        utils.out('Starting Glaciary.JS app...');
        setTimeout(() => {
            utils.out(`Glaciary.JS app started on port ${chalk.green(port)}`);
            utils.out(`HTTP(s) server started on port ${chalk.green(port)}`);
            utils.out(`Socket.IO server started on port ${chalk.green(port)}`)
        }, 1000)
    })
})

