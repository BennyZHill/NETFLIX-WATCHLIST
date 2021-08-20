const { connection } = require("../db");

const Director = connection.define(
  "Director",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);

const main = async () => {
  try {
    await Director.sync({ alter: true });
  } catch (error) {
    console.log(error);
  }
};

main();

module.exports = Director;
