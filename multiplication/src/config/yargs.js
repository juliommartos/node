const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base para realizar la tabla de multiplicar",
  })

  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: false,
    describe: "Mostrar la tabla por consola",
  })

  .option("e", {
    alias: "end",
    type: "number",
    demandOption: false,
    describe: "Aumentar el tamaño de la tabla",
  })

  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    } else if (argv.l === false) {
      throw "No necesita argumentos";
    } else if (isNaN(argv.e) && argv.e !== undefined) {
      throw "El limite tiene que ser un número";
    }

    return true;
  }).argv;

module.exports = argv;
