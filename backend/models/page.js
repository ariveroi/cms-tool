models.exports = (sequelize, DataTypes) => {
  const Page = sequelize.define("page", {
    name: { type: DataTypes.STRING, unique: true },
  });
};
