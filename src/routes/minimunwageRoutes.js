const express = require("express")
const router = express.Router()
const minimumwageController = require("../controllers/minimumwageController")

// Rota para exibir o salário mínimo
router.get("/", minimumwageController.getMinimunWage)

// Rota para atualizar o salário mínimo
router.get("/editMinimunWage/:id", minimumwageController.getEditMinimunWage);


// Rota para atualizar o salário mínimo
router.put("/editMinimunWage/id/:id", minimumwageController.updateMinimunWage);

// Rota para cadastrar um novo salário mínimo
router.get("/cadastroMinimunWage", (req, res, next) => {
  res.render("registerMinimunWage")
})

// Rota para criar um novo salário mínimo
router.post("/cadastroMinimunWage", minimumwageController.createMinimunWage)

module.exports = router
