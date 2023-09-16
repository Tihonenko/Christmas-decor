import { Router } from 'express';
// import { register, login, getMe } from '../controllers/userController.js'
import userController from '../controllers/userController.js';
import checkAuth from '../utils/checkAuth.js';
import { registerValidation } from '../validator/authValid.js';

const router = new Router();

// Register
router.post('/register', userController.register);

// Login
router.post('/login', userController.login);

// Get Me
router.get('/auth', checkAuth, userController.auth);

export default router;
