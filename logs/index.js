const fs = require('fs');

exports.writeLog = function (message) {
    fs.appendFileSync('messages.txt', message + '\n')
}

