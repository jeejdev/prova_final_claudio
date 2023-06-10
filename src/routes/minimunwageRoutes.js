const express = require("express")
const router = express.Router()
const minimumwageController = require("../controllers/minimumwageController")

// Rota para exibir todos os funcionários
router.get("/", minimumwageController.getMinimunWage)

// Rota para exibir um funcionário pelo código
// router.get("/id/:id", minimumwageController.getMinimunWageByCode)
router.get("/editMinimunWage/:id", minimumwageController.getEditMinimunWage);


// Rota para atualizar um funcionário
router.put("/editMinimunWage/id/:id", minimumwageController.updateMinimunWage);

// Rota para entrar na página de um novo funcionário
router.get("/cadastroMinimunWage", (req, res, next) => {
  res.render("registerMinimunWage")
})

// Rota para criar um novo funcionário
router.post("/cadastroMinimunWage", minimumwageController.createMinimunWage)

module.exports = router
