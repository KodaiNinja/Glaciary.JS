const chalk = require('chalk');
module.exports = {
    out(data) {
        return console.log(chalk.gray(new Date().toLocaleTimeString() + ' - ') + data) // Return an output with current time and custom data.
    }
}