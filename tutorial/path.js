const path = require("path")

//joining file path
const filePath = path.join("/content","subfolder", "test.txt")

console.log(filePath)
//getting the base of the filepath
console.log(path.basename(filePath))


//absolute path
const absolute = path.resolve(__dirname,"content", "subfolder", "test.txt")
console.log(absolute)

//speerater in the machine
console.log(path.sep)