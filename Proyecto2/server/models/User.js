const Sequelize = require("sequelize");
const Model = Sequelize.Model;

const sequelize = new Sequelize("witter", "postgres", "masterkey", {
  host: "localhost",
  dialect: "postgres",
});

class User extends Model {}
User.init(
  {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: Sequelize.JSON,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: Sequelize.JSON,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: Sequelize.JSON,
      allowNull: false,
    },
    followers: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    following: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
  },
  { sequelize }
);

sequelize.models.User;

module.exports = { User };
