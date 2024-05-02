const process = require('process');

function displayMessage(arg) {
  process.stdout.write(arg);
}

module.exports = displayMessage;