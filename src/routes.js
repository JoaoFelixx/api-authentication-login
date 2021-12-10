const { Router } = require('express');
const { createUserController } = require('./useCases');

const router = Router();

router.post('/users', createUserController)


module.exports = router;