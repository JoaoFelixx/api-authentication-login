const { UserService: User } = require('../../services')

async function createUser(user) {
  try {
    return await User.create(user);
    
  } catch (err) {
    console.error(err);
  }
}

module.exports = createUser;