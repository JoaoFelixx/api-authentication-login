const get = require('./get');

async function getController(request, response) {
  return response.sendStatus(200);
}

module.exports = getController