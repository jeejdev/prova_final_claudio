const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const MinimunWage = sequelize.define('MinimunWage', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  value: {
    type: DataTypes.INTEGER,
  }
});

// Sincronizar o modelo com o banco de dados
MinimunWage.sync()
  .then(() => {
    console.log('Tabela Minimun Wage criada com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao criar a tabela Minimun Wage:', error);
  });

module.exports = MinimunWage;
