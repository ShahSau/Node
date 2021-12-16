//const fs = require("fs")
//fs.writeFileSync('notes.txt', 'my name is !!!')
//fs.appendFileSync('notes.txt', 'this is the 2nd line')
// const validator = require("validator")
const getNotes = require("./notes")
const chalk = require("chalk")
const yargs = require('yargs')
// console.log(getNotes())
// console.log(validator.isEmail('shah@ddd.com'))
// console.log(chalk.green.bgRed.bold("success"))
// console.log(chalk.red("blue"))

// const command = process.argv[2]
// console.log(chalk.blue(command))

// if(command === 'add'){
//     console.log('adding notes')
// }else if(command==='remove'){
//     console.log('Removing notes!')
// }
// console.log(process.argv)
// console.log(yargs.argv)

//create add command
yargs.command({
    command: 'add',
    describe:'Adding a new note',
    handler: ()=>{
        console.log('adding a new note!')
    }
})
//create remove command
yargs.command({
    command: 'remove',
    describe:'Removing a new note',
    handler: ()=>{
        console.log('removing the note!')
    }
})
//create list command
yargs.command({
    command: 'list',
    describe:'listing the note',
    handler: ()=>{
        console.log('listing the note!')
    }
})
//create remove command
yargs.command({
    command: 'read',
    describe:'Reading the notes',
    handler: ()=>{
        console.log('reading the notes')
    }
})
console.log(yargs.argv)