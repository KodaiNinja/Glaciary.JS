// This file handle every type of method loaded below.
const utils = require('../utils');

exports.handle = function (app) {
    require('./GET/get').handle(app); // Handle GET routes loading.
    require('./POST/post').handle(app); // Handle POST routes loading.
    require('./PUT/put').handle(app); // Handle PUT routes loading.
}