const createUserController =  require('./create');
const authUserController = require('./auth');
const getController = require('./get'); 

module.exports = {
  createUserController,
  authUserController,
  getController,
};