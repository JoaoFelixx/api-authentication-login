const authUser = require('./authUser');
const bcrypt = require('bcryptjs');
const { UserService: User } = require('../../services') 

async function authUserController(request, response) {
  try {
    const { email, password } = request.body;
    const [[userExists]] = await User.getOne(email);

    if (userExists.length === 0) return response.status(400).json({ error: 'User not registered' })

    const passwordIsCorrect = await bcrypt.compare(password, userExists.password)

    if (!passwordIsCorrect) return response.status(400).json({ error: 'email or password is incorrect' })
    
    delete userExists.password

    const token = authUser(userExists._id)

    return response.status(201).json({ user: userExists, token })

  } catch (err) {
    return response.sendStatus(409)
  }
}

module.exports = authUserController;