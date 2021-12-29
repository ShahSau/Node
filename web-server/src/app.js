const path = require("path");
const express = require("express");
const geocode =require("./utils/geocode")
const forecast = require("./utils/forecast");
const hbs =require("hbs")
const app = express();
//defie paths for express config
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
// setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath)
// setup static directory
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather app",
    name: "shah",
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    title: "about hbs",
    name:"shah"
  });
});

app.get("/weather", (req,res)=>{
  if(!req.query.address){
    return res.send({
      error: "Address must be provided"
    })
  }
  geocode(req.query.address, (error, {latitude, longitude, location}={}) => {
    if (error) {
      return res.send(error);
    }
    
    forecast(latitude, longitude, (error, forecastdata) => {
      if (error) {
        return res.send(error);
      }
      res.send({
        location,
        forecast:forecastdata
      })
      // console.log(location)
      // console.log(forecastdata)
    });
  });
  // res.send({
  //   address: req.query.address
  // })
})
app.get("/products", (req,res)=>{
  if(!req.query.search){
    return res.send({
      error: "Search must be provided"
    })
  }
  res.send({
    products: []
  })
})
app.get("/help", (req, res) => {
  res.render("help.hbs", {
    title: "help",
    name:'shah',
    message: "help me!!",
  });
});

app.get("/help/*", (req,res)=>{
  
  res.render("helpError.hbs", {
    name:"Shah"
  })
})
app.get("*", (req,res)=>{
  res.render("404.hbs", {
    name:'shah',
  })
})

app.listen(3000, () => {
  console.log(`server running`);
});
