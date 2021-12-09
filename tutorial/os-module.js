//Module
const os = require("os")

//info about current user
const user =os.userInfo()
console.log(user)

//systems uptime
const uptime = os.uptime()
console.log(`system uptime in seconds: ${uptime} seconds`)

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}

{console.log(currentOs)}