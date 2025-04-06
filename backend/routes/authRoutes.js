const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Páginas
router.get('/', (req, res) => res.render('../pages/login'));
router.get('/register', (req, res) => res.render('../pages/register'));
router.get('/dashboard', authMiddleware, (req, res) => res.render('../pages/dashboard', { user: req.user }));

// APIs
router.post('/api/register', authController.register);
router.post('/api/login', authController.login);

module.exports = router;