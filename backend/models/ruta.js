models.exports = (sequelize, DataTypes) => {
  const Ruta = sequelize.define("ruta", {
    direccion: {
      type: DataTypes.STRING,
      unique: true,
      validate: { notEmpty: { msg: "Route must not be empty." } },
    },
    title: {
      type: DataTypes.STRING,
      validate: { notEmpty: { msg: "Route must not be empty." } },
    },
  });
};
