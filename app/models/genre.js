const { connection } = require("../db");

const Genre = connection.define(
  "Genre",
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
    await Genre.sync({ alter: true });
  } catch (error) {
    console.log(error);
  }
};

main();

module.exports = Genre;
