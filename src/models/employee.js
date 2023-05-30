const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Employee = sequelize.define('Employee', {
  code: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  hoursWorked: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  shift: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sincronizar o modelo com o banco de dados
Employee.sync()
  .then(() => {
    console.log('Tabela Employee criada com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao criar a tabela Employee:', error);
  });

module.exports = Employee;
