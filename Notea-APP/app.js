//const fs = require("fs")
//fs.writeFileSync('notes.txt', 'my name is !!!')
//fs.appendFileSync('notes.txt', 'this is the 2nd line')
// const validator = require("validator")
const notes = require("./notes")
const chalk = require("chalk")
const yargs = require('yargs')
const { argv } = require("yargs")
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
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"Body of note",
            demandOption:true,
            type:"string"
        }
    },
    handler: (argv)=>{
        notes.addNotes(argv.title, argv.body)
    }
})
//create remove command
yargs.command({
    command: 'remove',
    describe:'Removing a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type:'string'
        }},
    handler: (argv)=>{
        notes.removeNotes(argv.title)
    }
})
//create list command
yargs.command({
    command: 'list',
    describe:'listing the note',
    handler: ()=>{
        let allNotes= notes.getNotes()
        allNotes.map(note=> console.log(chalk.green(note.title)))
    }
})
//create remove command
yargs.command({
    command: 'read',
    describe:'Reading the notes',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type:'string'
        }},
    handler: (argv)=>{
        notes.readNote(argv.title)
    }
})
yargs.parse()
// console.log(yargs.argv)