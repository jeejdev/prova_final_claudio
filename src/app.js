const express = require('express');
const path = require('path');
const app = express();

// Configurações do Express
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'assets')));

// Definição de rotas
// rotas home
app.get('/', (req, res) => {
  res.render('home');
});

// rotas de funcionários
const employeeRoutes = require('./routes/employeeRoutes');
app.use('/employees', employeeRoutes);

// Inicialização do servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
