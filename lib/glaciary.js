const fs = require('fs-extra');
const { exec } = require('child_process');


module.exports.checkForGlaciaryFolder = function (dir) {
    if (fs.existsSync(dir)) {
        if (fs.readdirSync(dir).length === 0) {
            // Copy .glaciary content files from app container to cwd.
            fs.copy(`${__dirname}\\.glaciary`, dir, err => {
                if (err) return console.log(err);
            });
            return true;
        } else {
            return true;
        }
    } else {
        // Create .glaciary dir in cwd.
        fs.mkdirSync(dir);
        // Copy .glaciary content files from app container to cwd.
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