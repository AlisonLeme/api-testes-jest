const { User } = require("../models");

class UserController {
  async listUsers(req, res) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar usuários" });
    }
  }
  async createUser(req, res) {
    const { name, email, password } = req.body;

    try {
      const newUser = await User.create({
        name,
        email,
        password,
      });

      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao criar usuário" });
    }
  }
}

module.exports = new UserController();
