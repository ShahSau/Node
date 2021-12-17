const fs = require('fs')
 const book = {
    'name':'shah', 'planet':'earth', 'age':'31'
 }

 const bookJSON=JSON.stringify(book)
 fs.writeFileSync('1-JSON.json', bookJSON)

const data_buffer =fs.readFileSync('1-JSON.json').toString()
const data = JSON.parse(data_buffer)

console.log(data)