const { Router } = require('express');
const { middlewareJwt } = require('./middlewares')
const {
  getController,
  authUserController,
  createUserController,
} = require('./useCases');

const routes = Router();

routes.post('/users', createUserController);
routes.post('/auth', authUserController);

routes.use(middlewareJwt);

routes.get('/users', getController)

module.exports = { routes };