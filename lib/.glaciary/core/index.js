const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const utils = require('../utils');
const defaults = require('../../defaults');
const config = require('../../config.glaciary');
const app = express();
let options = {};


// Parse application/x-www-form-urlencoded.
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json.
app.use(bodyParser.json());

// Parse cors.
app.use(cors());

// Creating the HTTP server.
const server = http.createServer(app);

if (config.server.https) {
    //This pice of code will setup the key and the certificate into Socket.IO and Express.JS server.
    options = {
        key: fs.readFileSync(config.sslkeyName),
        cert: fs.readFileSync(config.sslcertName)
    };
    // Setup the HTTPS server.
    server = https.createServer(options, app);
}

// Creating Socket.IO server.
const io = require('socket.io')(server);

// Loading defaults for HTTP server.
app.get('/', defaults.http);

// Loading Defaults for Socket.IO
io.on('connection', function (socket) {
    defaults.socket(socket);
});

// Loading every GET/POST/PUT route controller.
require('../api/loading').handle(app);

// Listen the server on the port from config.glaciary.js
server.listen(config.server.port, function () {
    utils.serverOnline(config.server.port);
});


