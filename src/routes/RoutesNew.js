const express = require('express');
const router = express.Router();
const ControllerNew = require('../app/controllers/ControllerNew');

// [GET] url="/new/"
router.get('/', ControllerNew.new);

module.exports = router;