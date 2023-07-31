const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/homeControllers');

// [GET] url="/"
router.get('/', homeController.home);

module.exports = router;