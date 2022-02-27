const multiplication = require('./helpers/multiplication');
const argv = require("yargs").argv;
multiplication.main(4);
console.clear();

console.log(argv);

//crearArchivo(base)
//  .then(nombre => console.log(nombre))
//  .catch(err => console.log(err))
