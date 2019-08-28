const fs = require('fs');
const moment = require('moment');


module.exports = function (data) {

    const utils = require('../utils'); // Require utils right in the function because it's the only way to recognize functions from utils.
    const currentDebugFile = `../debug/${moment().format('YYYY-D-h-mm')}.txt`; // Format a unique name for current time debug file.
    if (fs.existsSync(currentDebugFile)) data = new Date().toLocaleTimeString() + ' - ' + data + '\n'; // Format Data to output it into current debug file, just if the currentDebugFile exists.

    // Check if currentDebugFile exists.
    if (!fs.existsSync(currentDebugFile)) {
        try {
            fs.writeFileSync(currentDebugFile, new Date().toLocaleTimeString() + ' - ' + 'Starting Glaciary.JS app...\n'); // Create currentDebugFile into ../debug and write just a line into if file do not exist.
            fs.appendFileSync(currentDebugFile, new Date().toLocaleTimeString() + ' - ' + `Glaciary.JS app started on port ${data}\n`); // Write into currentDebugFile.
            fs.appendFileSync(currentDebugFile, new Date().toLocaleTimeString() + ' - ' + `HTTP(s) server started on port ${data}\n`); // Write into currentDebugFile.
            fs.appendFileSync(currentDebugFile, new Date().toLocaleTimeString() + ' - ' + `Socket.IO server started on port ${data}\n`); // Write into currentDebugFile.
        } catch (err) {
            utils.print(err); // Print error.
        }
    } else {
        try {
            fs.appendFileSync(currentDebugFile, data); // Write into currentDebugFile
        } catch (err) {
            utils.print(err); // Print error.
        }
    }

}