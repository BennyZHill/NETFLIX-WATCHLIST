const fs = require("fs");

exports.createMovie = (id, name, year, director, restriction, genre) => {
  const movie = new movie({
    id: id,
    name: name,
    year: year,
    director: director,
    restriction: restriction,
    genre: genre,
  });
  console.log(movie);
};
