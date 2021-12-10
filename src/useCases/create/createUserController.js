const createUser = require('./createUser');
const { User } = require('../../entities');

const regexEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

async function createUserController(request, response) {
  try {
    const user = new User(request.body)

    const { error, valid } = user.isValid()

    if (!valid) return response.status(400).json({ errors: error })

    if (!regexEmail.test(user.email)) return response.status(400).json({ error: 'Email is invalid' })  

    await createUser(user);

    return response.sendStatus(201)

  } catch (err) {
    console.error(err);
    return response.sendStatus(409);
  }
}

module.exports = createUserController;