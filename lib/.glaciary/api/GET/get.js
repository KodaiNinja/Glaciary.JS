const fs = require('fs');
const utils = require('../../utils');

const modulesDir = "../api/GET"

exports.handle = function (app) {
    fs.readdir(modulesDir, (err, files) => {  // Create an array with every available route/event for the requested type.
        if (err) {
            utils.print(err);
        } else if (files.length != 0) {
            files.forEach(file => {
                let appF = require(`../../../api/GET/${file}`);
                app.get(`/${file.replace('.js', '')}`, appF);
                utils.print(`Route /${file.replace('.js', '')} successfully loaded into app as GET request!`);
            });
        } else {
            utils.print('No GET route was loaded!');
        }
    });
}