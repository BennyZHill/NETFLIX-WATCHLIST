const fs = require("fs");

exports.createMovie = (id, name, year, director) => {
  const movie = new movie({
    id: id,
    name: name,
    year: year,
    director: director,
  });
  console.log(movie);
};
