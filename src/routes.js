const { Router } = require('express');
const { middleware_jwt } = require('./middlewares')
const { 
  getController,
  authUserController, 
  createUserController,
} = require('./useCases');

const router = Router();

router.get('/users', middleware_jwt, getController)

router.post('/users', createUserController)
router.post('/auth', authUserController)

module.exports = router;