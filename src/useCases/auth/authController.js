const authenticate = require('./auth');

const authenticationController = (request, response) => {
  try {
    const { email, password, id } = request.body;

    
  } catch (err) {
    console.error(err)
  }
}

module.exports = authenticationController;