const fs = require('fs-extra');
const { exec } = require('child_process');


module.exports.checkForGlaciaryFolder = function (dir) {
    if (fs.existsSync(dir)) {
        if (fs.readdirSync(dir).length === 0) {
            // Copy base files into .glaciary
            fs.copy(`${__dirname}\\.glaciary`, dir, err => {
                if (err) return console.log(err);
            });
            return true;
        } else {
            return true;
        }
    } else {
        fs.mkdirSync(dir);
        fs.copy(`${__dirname}\\.glaciary`, dir, err => {
            if (err) return console.log(err);
        });
        return true;
    }
}


module.exports.run = function (dir) {
    exec(`cd ${dir} && node ./core/index`, (err, stdout) => {
        if (err) {
            console.log(err);
            return process.exit()
        }
    });
}