const path = require("path");
const express = require("express");
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

app.get("/help", (req, res) => {
  res.render("help.hbs", {
    title: "help",
    name:'shah',
    message: "help me!!",
  });
});

app.listen(3000, () => {
  console.log(`server running`);
});
