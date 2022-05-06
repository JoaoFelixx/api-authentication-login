const { UserService: User } = require('../../services')
const bcryptjs = require('bcryptjs');

async function createUser(user) {
  try {
    user.password = await bcryptjs.hash(user.password, 8)

    return await User.create(user);

  } catch (err) {
    throw new Error(err)
  }
}

module.exports = { createUser };