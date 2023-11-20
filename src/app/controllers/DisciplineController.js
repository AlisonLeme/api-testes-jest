const { Discipline } = require("../models");

class DisciplineController {
  async listDisciplines(req, res) {
    try {
      const disciplines = await Discipline.findAll();
      res.json(disciplines);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar disciplinas" });
    }
  }
  async createDiscipline(req, res) {
    const { name } = req.body;

    try {
      const newDiscipline = await Discipline.create({
        name,
      });

      res.status(201).json(newDiscipline);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao criar disciplina" });
    }
  }
}

module.exports = new DisciplineController();
