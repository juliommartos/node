const fs = require("fs");

function generateLogo(base) {
  return `############################
 Multiplication table of  ${base}
############################\n`;
}

function generateProduct(base) {
  let result;

  for (let index = 1; index <= 10; index++) {
    result += `${base} x ${index} = ${base * index}\n`;
  }

  return result;
}

async function saveToFile(table) {
  try {
    fs.writeFileSync(`tabla-${table}.txt`, table);
    return `tabla-${table}.txt`;
  } catch (error) {
    return error;
  }
}

function main(base) {
  const logo = generateLogo(base);
  const product = generateProduct(base);
  
  let result = "";
  result += logo;
  result += product;

  saveToFile(result)
    .then((name) => console.log(name))
    .catch((err) => console.log(err));
}

module.export = { generateLogo, generateProduct, saveToFile, main};
