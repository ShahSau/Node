const path = require("path")
const express = require("express")



const app =express()
app.use(express.static(path.join(__dirname, "../public")))

app.get("/about", (req,res)=>{
    res.sendFile( path.join(__dirname, "../public" ,"about.html"))
})

app.get("/help", (req,res)=>{
    res.sendFile( path.join(__dirname, "../public" ,"help.html"))
})

app.listen(3000, ()=>{
    console.log(`server running`)
})

