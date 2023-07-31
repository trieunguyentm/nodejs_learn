const express = require('express');
const router = express.Router();
const newController = require('../app/controllers/newControllers');

// [GET] url="/new/"
router.get('/', newController.new);

module.exports = router;