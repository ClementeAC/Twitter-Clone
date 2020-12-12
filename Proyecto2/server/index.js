const express = require("express");
const dotenv = require("dotenv");
const { Pool, Client } = require("pg");
const bodyParser = require("body-parser");
const users = require("./routes/users");
const cors = require("cors");
const passport = require("passport");
const posts = require("./routes/posts");

//postgresql connection
const Sequelize = require("sequelize");

const sequelize = new Sequelize("witter", "postgres", "masterkey", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

//setup enviorment
dotenv.config;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/posts", posts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
console.log(process.env.PORT);
