models.exports = (sequelize, DataTypes) => {
  const Children = sequelize.define("children", {
     name: {
         type: DataTypes.STRING,
         unique: true
     },
     body: {
         type: DataTypes.STRING
     }
  });
};

