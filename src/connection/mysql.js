const { createConnection } = require('mysql2')
const { mySqlConfig } = require('../config');

try {
  const connection = createConnection(mySqlConfig);

  module.exports = connection

} catch (error) {
  console.error('Refused connection, error: ', error)
  throw new Error(error)
}