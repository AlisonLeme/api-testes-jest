module.exports = (sequelize, DataTypes) => {
  const Discipline = sequelize.define("Discipline", {
    name: DataTypes.STRING,
  });

  return Discipline;
};
