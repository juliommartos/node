const { multiplication } = require("./helpers/multiplication");
const argv = require('./config/yargs')

console.clear();
multiplication(argv.b, argv.l, argv.e);
