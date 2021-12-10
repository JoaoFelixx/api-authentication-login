const authenticate = require('./authUser');

const authUserController = (request, response) => {
  try {
    const { email, password, id } = request.body;

    
  } catch (err) {
    console.error(err)
  }
}

module.exports = authenticationController;