const { Router } = require('express');
const { createUserController } = require('./useCases/index.js');

const router = Router();

router.get('/', createUserController)

module.exports = router;