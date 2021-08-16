const path = require("path");
const Sequelize = require("sequelize");

const url = process.env.DATABASE_URL || "sqlite:cms.sqlite";

const sequelize = Sequelize(url);
//Imports de la BBDD (el nombre de las tablas)
sequelize.import(path.join(__dirname, "children"));
sequelize.import(path.join(__dirname, "page"));
// sequelize.import(path.join(__dirname, 'ruta'));
sequelize.import(path.join(__dirname, "session"));
sequelize.import(path.join(__dirname, "user"));

//Relaciones entre las tablas
const { children, page, ruta, user } = sequelize.models;

user.hasMany(page, { foreingKey: "userId" });
page.belongsTo(user, { as: "user", foreingKey: "userId" });

page.hasMany(children, { foreingKey: "pageId" });
children.belongsTo(page, { as: "page", foreingKey: "pageId" });

page.hasOne(ruta, { foreingKey: "pageId" });

module.exports = sequelize;
