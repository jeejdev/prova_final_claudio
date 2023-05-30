const Employee = require("../models/employee")

// Criar um novo funcionário
exports.createEmployee = async (req, res) => {
  try {
    const { name, hoursWorked, shift, category } = req.body

    // Cálculo do salário inicial, valor da hora trabalhada, etc.

    const employee = await Employee.create({
      name,
      hoursWorked,
      shift,
      category,
      // Outros campos do funcionário
    })
    
    res.redirect("/employees")
  } catch (error) {
    console.error("Erro ao criar o funcionário:", error)
    res.status(500).send("Erro ao criar o funcionário")
  }
}

// Função controladora para exibir todos os funcionários
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll()

    res.render("employees", { employees })
  } catch (error) {
    console.error(error)
    res.status(500).send("Erro ao obter os funcionários")
  }
}

// Obter um funcionário pelo código
exports.getEmployeeByCode = async (req, res) => {
  try {
    const { code } = req.params
    const employee = await Employee.findOne({
      where: { code },
    })

    if (employee) {
      res.render("employee", { employee })
    } else {
      res.render("employee", { employee })
    }
  } catch (error) {
    console.error("Erro ao obter o funcionário:", error)
    res.status(500).send("Erro ao obter o funcionário")
  }
}

// Atualizar um funcionário
exports.updateEmployee = async (req, res) => {
  try {
    const { code } = req.params
    const { hoursWorked, shift, category } = req.body

    const employee = await Employee.findOne({
      where: { code },
    })

    if (employee) {
      // Atualizar os campos necessários do funcionário
      employee.hoursWorked = hoursWorked
      employee.shift = shift
      employee.category = category

      await employee.save()
      res.send(employee)
    } else {
      res.status(404).send("Funcionário não encontrado")
    }
  } catch (error) {
    console.error("Erro ao atualizar o funcionário:", error)
    res.status(500).send("Erro ao atualizar o funcionário")
  }
}

// Excluir um funcionário
exports.deleteEmployee = async (req, res) => {
  try {
    const { code } = req.params
    const employee = await Employee.findOne({
      where: { code },
    })

    if (employee) {
      await employee.destroy()
      res.send("Funcionário excluído com sucesso")
    } else {
      res.status(404).send("Funcionário não encontrado")
    }
  } catch (error) {
    console.error("Erro ao excluir o funcionário:", error)
    res.status(500).send("Erro ao excluir o funcionário")
  }
}
