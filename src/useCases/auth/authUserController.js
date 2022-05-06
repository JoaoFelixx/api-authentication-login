const { authUser } = require('./authUser');

async function authUserController(request, response) {
  try {
    const regexEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

    if (!regexEmail.test(request.body.email))
      return response.status(400).json('Email is invalid');

    const result = await authUser(request.body);

    if (result instanceof Error)
      return response.status(400).json(result.message);

    return response.status(201).json({ user: result })

  } catch (err) {
    return response.sendStatus(409)
  }
}

module.exports = { authUserController };