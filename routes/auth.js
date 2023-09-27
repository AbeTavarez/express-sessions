const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

// Routes

/**
 * @method POST
 * @route /api/auth/register
 * @description registers or create a new user
 */
router.post('/register', authController.register);

/**
 * @method POST 
 * @route /api/auth/login 
 * @description authenticates a user 
 */
router.post('/login', authController.login);




// ====================
module.exports = router;