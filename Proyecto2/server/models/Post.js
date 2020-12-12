const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("witter", "postgres", "masterkey", {
  host: "localhost",
  dialect: "postgres",
});

const postModel = sequelize.define("Post", {
  user: {
    type: DataTypes.JSON,
    allowNull: false
  },
  text: {
      type: DataTypes.TEXT,
      allowNull: false
  },
  createdAt: {
      type: DataTypes.DATE,
      defaultValue: Date.now
  }
});

module.exports = {postModel}