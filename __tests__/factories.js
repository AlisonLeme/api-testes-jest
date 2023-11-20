const faker = require("faker");
const { factory } = require("factory-girl");
const { User } = require("../src/app/models");
const { Discipline } = require("../src/app/models");

factory.define("User", User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password()
});

factory.define("Discipline", Discipline, {
  name: faker.name.findName(),
});

module.exports = factory;
