const { generateProduct, generateLogo } = require("../helpers/multiplication");

test("Generate img for txt", () => {
  expect(generateLogo(5)).toBe(`############################
 Multiplication table of 5
############################\n`);
});

test("Tabla de multiplicar de n x 10", () => {
  expect(generateProduct(5)).toBe(`5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
`);
});
