const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

// Rota para a página inicial
router.get('/', reservaController.exibirReserva);

// Rota para verificar a disponibilidade de horários
router.get('/api/check-availability', reservaController.checkAvailability);

// Rota para reservar um horário
router.post('/api/reserve-slot', reservaController.reserveSlot);

module.exports = router;
