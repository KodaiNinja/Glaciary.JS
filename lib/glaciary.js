const fs = require('fs-extra');
const { exec } = require('child_process');


module.exports.checkForGlaciaryFolder = function (dir) {
    if (fs.existsSync(dir)) {
        if (fs.readdirSync(dir).length === 0) {
            try {
                // Copy .glaciary content files from app container to cwd.
                fs.copySync(`${__dirname}\\.glaciary`, dir);
                return true;
            } catch (err) {
                console.log(err);
            }
        } else {
            return true;
        }
    } else {
        try {
            // Create .glaciary dir in cwd.
            fs.mkdirSync(dir);
            // Copy .glaciary content files from app container to cwd.
            fs.copySync(`${__dirname}\\.glaciary`, dir);
            return true;
        } catch (err) {
            console.log(err);
        }
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