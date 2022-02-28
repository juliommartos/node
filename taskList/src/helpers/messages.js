require("colors");

function pause() {
  const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readLine.question(`\nPress ${"ENTER".green} to continue\n`, () => {
    readLine.close();
  });
}

function showMenu() {
  console.clear();

  console.log("================================".green);
  console.log("       Select an option".green);
  console.log("================================\n".green);

  console.log(`${"1.".green} Create task`);
  console.log(`${"2.".green} List task`);
  console.log(`${"3.".green} List complete task`);
  console.log(`${"4.".green} list task pending`);
  console.log(`${"5.".green} Complete task(s)`);
  console.log(`${"6.".green} Delete task`);
  console.log(`${"0.".green} Exit \n`);
}

module.exports = {
  showMenu,
  pause,
};
