const createUser = require('./createUser');

async function createUserController(request, response) {
  return response.status(200).json({result: 'Hello world'})
}

module.exports = createUserController;