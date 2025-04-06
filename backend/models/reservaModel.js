const db = require('../config/db');  // Aqui você faz a conexão com a sua base de dados.

const reservaModel = {

  // Verificar a disponibilidade de horários
  checkAvailability: async (data) => {
    try {
      const query = 'SELECT * FROM reservas WHERE data = ? AND disponivel = 1';  // Use 1 para TRUE

      // Execute a consulta ao banco de dados
      const result = await db.execute(query, [data]);

      // Acessa diretamente o array de resultados
      const rows = result._rows;

      // Verifica se 'rows' é um array
      if (Array.isArray(rows)) {
        return rows;  // Retorna as linhas encontradas
      } else {
        throw new Error('A consulta não retornou um array de resultados.');
      }
    } catch (error) {
      console.error('Erro ao verificar a disponibilidade:', error.message);
      throw new Error('Erro ao verificar a disponibilidade: ' + error.message);
    }
  },


  // Reservar um horário
  reserveSlot: async (data, hora_inicio, hora_fim) => {
    try {
      const queryCheck = 'SELECT * FROM reservas WHERE data = ? AND hora_inicio = ? AND hora_fim = ? AND disponivel = 1';
      const result = await db.execute(queryCheck, [data, hora_inicio, hora_fim]);

      const rows = result._rows;

      if (rows.length > 0) {
        const queryReserve = 'UPDATE reservas SET disponivel = 0 WHERE data = ? AND hora_inicio = ? AND hora_fim = ?';
        await db.execute(queryReserve, [data, hora_inicio, hora_fim]);
        return { success: true };
      } else {
        return { success: false, message: 'Esse horário já está reservado ou não existe.' };
      }
    } catch (error) {
      console.error('Erro ao realizar a reserva:', error.message);
      throw new Error('Erro ao realizar a reserva: ' + error.message);
    }
  }
};

module.exports = reservaModel;
