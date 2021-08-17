const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const fs = require("fs");
// const command = process.argv[2];
// const input = process.argv[3];
// const updateInput = process.argv[4];
// const { createMovie, findMovie, updateMovie, deleteMovie } = require('./utils');
// const { add } = require("../../netflix/utils");

const Movie = mongoose.model("movies", {
  name: {
    type: String,
    required: true,
  },

  year: {
    type: Number,
  },

  director: {
    type: String,
  },
  restriction: {
    type: Number,
  },
  genre: {
    type: String,
  },
});

const app = async () => {
  if (argv.add) {
    await createMovie(argv.name, argv.year, argv.director, argv.restriction);
  } else if (argv.find) {
    await findMovie(argv.name);
  } else if (argv.findAll) {
    await findAll();
  } else if (argv.findYear) {
    await findByYear(argv.year);
  } else if (argv.updateName) {
    await updateMovieName(argv.updateName, argv.newName);
  } else if (argv.updateyear) {
    await updateMovieYear(argv.name, argv.newYear);
  } else if (argv.delete) {
    await deleteMovie(argv.name);
  }

  process.exit();
};

const createMovie = async (name, year, director) => {
  const newMovie = new Movie({ name, year, director });
  await newMovie.save();
  console.log(newMovie);
};

const findMovie = async (name) => {
  const movieFind = await Movie.find({ name });
  console.log(movieFind);
};

const findAll = async () => {
  const movieFindAll = await Movie.find({});
  console.log(movieFindAll);
};

const findByYear = async (year) => {
  const movieFindYear = await Movie.find({ year });
  console.log(movieFindYear);
};

const updateMovieName = async (updateName, newName) => {
  const movieUpdateName = await Movie.updateOne(
    { name: updateName },
    { $set: { name: newName } }
  );
  console.log(movieUpdateName);
};

const updateMovieYear = async (name, newYear) => {
  const movieUpdateYear = await Movie.updateOne(
    { name: name },
    { $set: { year: newYear } }
  );
  console.log(movieUpdateYear);
  console.log(await Movie.find({ name: name }));
};

const deleteMovie = async (name) => {
  const movieDelete = await Movie.deleteMany({ name: name });
  console.log(movieDelete);
  console.log(`Deleting ${argv.name}`);
};

app();
