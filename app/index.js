require("dotenv").config();
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { addMovie, editMovie, showMovie, removeMovie } = require("./utils");
const { connection } = require("./db");
const main = async () => {
  const argv = yargs(hideBin(process.argv)).argv;

  try {
    await connection.authenticate();

    if (argv.add && argv.name) {
      const { _, add, ...options } = { ...argv };
      delete options["$0"];
      console.log(options);

      await addMovie(argv.name);
    }

    if (argv.edit && argv.name && argv.newName) {
      await editMovie(argv.name, argv.newName);
    }

    if (argv.show && argv.name) {
      await showMovie(argv.name);
    }

    if (argv.remove && argv.name) {
      await removeMovie(argv.name);
    }

    //await connection.close();
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

main();
