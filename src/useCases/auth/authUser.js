const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secretKey = require('../../secret');
const { UserService } = require('../../services');

async function authUser ({ email, password }) {
  try {
    const [[userExists]] = await UserService.getOne(email);

    if (!userExists)
      return new Error('User not registered');

    const passwordIsCorrect = await bcrypt.compare(password, userExists.password)

    if (!passwordIsCorrect)
      return new Error('email or/and password is incorrect');

    delete userExists.password

    const token = jwt.sign({ _id: userExists._id }, secretKey, { expiresIn: '1d' });

    userExists.token = token;

    return userExists;

  } catch (err) {
    return new Error(err);
  }
}

module.exports = { authUser };