const { Router } = require('express');
const { middleware_jwt } = require('./middlewares')
const { 
  getController,
  authUserController, 
  createUserController,
} = require('./useCases');

const router = Router();

router.post('/users', createUserController);
router.post('/auth', authUserController);

router.use(middleware_jwt);

router.get('/users', getController)

module.exports = router;