const { createConnection } = require('mysql2')
const { mySqlConfig } = require('../config');

const mysql = createConnection(mySqlConfig);

module.exports = { mysql };