const fs = require('fs');
const utils = require('../../utils');

const modulesDir = "../api/PUT"

exports.handle = function (app) {
    fs.readdir(modulesDir, (err, files) => {  // Create an array with every available route/event for the requested type.
        if (err) {
            utils.print(JSON.stringify(err));
        } else if (files.length > 0) {
            files.forEach(file => {
                let appF = require(`../../../api/PUT/${file}`);
                app.post(`/${file.replace('.js', '')}`, appF);
                utils.print(`Route /${file.replace('.js', '')} successfully loaded into app as PUT request!`);
            });
        } else {
            utils.print('No PUT route was loaded!');
        }
    });
}