const Movie = require("../models/movie");
const Genre = require("../models/genre");
const Director = require("../models/director");

const addMovie = async (name) => {
  const movie = Movie.build({ name });
  await movie.save();
  console.log(`Added: ${movie.name}`);
};

const editMovie = async (oldName, newName) => {
  const movies = await Movie.update(
    { name: newName },
    { where: { name: oldName } }
  );

  console.log(`Edited: ${movies} movies(s)`);
};

const showMovie = async (name) => {
  const movies = await Movie.findAll({ where: { name } });

  for (let movie of movies) {
    console.log(`Showing: ${movie.name}`);
  }
};

const removeMovie = async (name) => {
  const movies = await Movie.destroy({ where: { name } });
  console.log(`Removed: ${movies} movies(s)`);
};

module.exports = {
  addMovie,
  editMovie,
  showMovie,
  removeMovie,
};
