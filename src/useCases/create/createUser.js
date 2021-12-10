const { UserService: User } = require('../../services')

async function createUser(user) {
  try {
    return await User.create(user);
    
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = createUser;