const colors = require('colors/safe').bold;

const log = console.log;

module.exports = {
  warning: (message) => log(colors.yellow(`Warning: ${message}`)),
  error: (message) => log(colors.red(`Error: ${message}`)),
  info: (message) => log(colors.blue(`Info: ${message}`)),
  success: (message) => log(colors.green(`Success: ${message}`)),
  log: (message) => log(message)
};
