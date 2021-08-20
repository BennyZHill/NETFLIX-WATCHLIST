const { connection } = require("../db");

const Movie = connection.define(
  "Movie",
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
    await Movie.sync({ alter: true });
  } catch (error) {
    console.log(error);
  }
};

main();

module.exports = Movie;
