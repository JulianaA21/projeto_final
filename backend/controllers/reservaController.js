const reservaModel = require('../models/reservaModel');

exports.showReservas = async (req, res) => {
  try {
    // Defina a data que você quer consultar (pode ser dinâmico ou estático)
    const data = '2025-04-07'; // Exemplo de data estática, pode ser dinâmico

    // Verificar disponibilidade (retorna uma lista de horários)
    const horarios = await reservaModel.checkAvailability(data);

    // Renderizar a view e passar os dados
    res.render('reservas', { horarios });
  } catch (error) {
    console.error('Erro ao buscar as reservas:', error);
    res.status(500).send('Erro no servidor');
  }
};

exports.reserveSlot = async (req, res) => {
    try {
      const { hora_inicio, hora_fim } = req.query;
  
      // Realizar a reserva
      const result = await reservaModel.reserveSlot('2025-04-07', hora_inicio, hora_fim);
  
      if (result.success) {
        res.json({ success: true });
      } else {
        res.json({ success: false, message: result.message });
      }
    } catch (error) {
      console.error('Erro ao realizar a reserva:', error);
      res.status(500).json({ success: false, message: 'Erro no servidor' });
    }
  };