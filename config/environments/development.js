const path = require('path');
const logPath = path.join(__dirname, '../../logs/development.log');

module.exports = {
  web: {
    port: 3001
  },
  logging: {
    appenders: {
      out: { type: 'console' },
      app: { type: 'file', filename: logPath }
    },
    categories: {
      default: { appenders: ['out'], level: 'info' },
      app: { appenders: ['app'], level: 'info' }
    }
  }
};
