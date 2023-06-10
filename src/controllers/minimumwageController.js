const MinimunWage = require("../models/minimunwage")

// Criar um novo salário mínimo
exports.createMinimunWage = async (req, res) => {
  try {
    const { value } = req.body

    const minimunwage = await MinimunWage.create({
      value
    })

    res.redirect("/minimunwage")
  } catch (error) {
    console.error("Erro ao adicionar salário mínimo:", error)
    res.status(500).send("Erro ao criar adicionar salário mínimo")
  }
}

exports.getMinimunWage = async (req, res) => {
  try {
    const minimunwage = await MinimunWage.findAll()

    res.render("minimunwage", { minimunwage })
  } catch (error) {
    console.error(error)
    res.status(500).send("Erro ao obter salário mínimo")
  }
}

// Atualizar um funcionário
exports.updateMinimunWage = async (req, res) => {
  try {
    const { id } = req.params;
    const { value } = req.body;

    const minimunwage = await MinimunWage.findByPk(id);

    if (minimunwage) {
      minimunwage.value = value;
      await minimunwage.save();

      res.redirect("/minimunwage");
    } else {
      res.status(404).send("Salário mínimo não encontrado");
    }
  } catch (error) {
    console.error("Erro ao atualizar o salário mínimo:", error);
    res.status(500).send("Erro ao atualizar o salário mínimo");
  }
};

exports.getEditMinimunWage = async (req, res) => {
  try {
    const id = req.params.id;
    const minimunwage = await MinimunWage.findOne({
      where: { id },
    });

    if (minimunwage) {
      res.render("editMinimunWage", { minimunwage });
    } else {
      res.status(404).send("Salário mínimo não encontrado");
    }
  } catch (error) {
    console.error("Erro ao obter o salário mínimo:", error);
    res.status(500).send("Erro ao obter o salário mínimo");
  }
};