const { exec } = require('child_process');

module.exports.run = function (dir) {
    boot(dir)
}

function boot(dir) {
    exec(`cd ${dir} && node index`, (err, stdout) => {
        if (err) return console.log(err);
        else return console.log(stdout);
    });
}