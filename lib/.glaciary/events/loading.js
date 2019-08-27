const fs = require('fs');
const utils = require('../utils');

exports.handle = function (io) {
    // Define event dir path.
    const eventsDir = "../events/"

    // Reading events dir.
    fs.readdir(eventsDir, (err, files) => {
        if (err) {
            utils.print(JSON.stringify(err));
        } else if (files.length > 0) {
            files.forEach(file => {
                let socketFunction = require(`../../events/${file.replace('.js', "")}`);
                io.on('connection', (socket) => {
                    socket.on(file.replace('.js', ""), function(data){
                        socketFunction(socket, data);
                    });
                })
                utils.print(`Event ${file.replace('.js', "")} successfully loaded into app!`)
            });
        } else {
            utils.print('No Socket.IO events was loaded!'); // Print this if there's no file to read.
        }
    })
}