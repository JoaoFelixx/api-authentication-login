const { getController } = require('./get');
const { authUserController } = require('./auth');
const { createUserController } = require('./create');

module.exports = {
  getController,
  authUserController,
  createUserController,
};