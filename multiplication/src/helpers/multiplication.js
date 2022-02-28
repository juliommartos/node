const fs = require("fs");
const colors = require("colors");

function generateLogo(base) {
  return `############################
 Multiplication table of ${base}
############################\n`;
}

function generateProduct(base, endTable = 10) {
  let result = "";

  for (let index = 1; index <= endTable; index++) {
    result += `${base} x ${index} = ${base * index}\n`;
  }

  return result;
}

async function saveToFile(base, result) {
  try {
    fs.writeFileSync(`../src/results/tabla-${base}.txt`, result);
    return `table of ${base}.txt created`;
  } catch (error) {
    return `No se pudo guardar: ${error}`;
  }
}

function multiplication(base, mustShow, endTable) {
  const logo = generateLogo(base);
  const product = generateProduct(base, endTable);

  let result = "";
  result += logo;
  result += product;

  saveToFile(base, result)
    .then((name) => console.log(name))
    .catch((err) => console.log(err));

  if (mustShow) {
    console.log(result);
  }
}

module.exports = { generateLogo, generateProduct, multiplication };
