const http = require("http");

//it takes call back
const server = http.createServer((req, res) => {
 
  if (req.url === "/") {
    res.end("welcome to our page");
    
  } else if (req.url === "/contact") {
    res.end("welcome to contact page");
  } else if (req.url === "/about") {
    res.end("welcome to about page");
  } else {
    res.end(`
    <h1>opps </h1>
    <p>we cant find the page </p>
    <a href="/">Home </a>
    `);
  }
});

server.listen(5000, () => {
  console.log("server is runnign on port 5000");
});
