//const fs = require("fs")
//fs.writeFileSync('notes.txt', 'my name is !!!')
//fs.appendFileSync('notes.txt', 'this is the 2nd line')
// const validator = require("validator")
const getNotes = require("./notes")
const chalk = require("chalk")

console.log(getNotes())
// console.log(validator.isEmail('shah@ddd.com'))
console.log(chalk.green.bgRed.bold("success"))
console.log(chalk.red("blue"))