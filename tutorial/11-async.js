const { readFile, writeFile } = require("fs");

//we need to provide callback after, path and encoded format
//if we dont provide the utf8 the result will be encoded data.
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `here is the data ${first}: ${second}`,
      (err,result)=>{
          if(err){
              console.log(err)
              return;
          }
          console.log(result)
      }
    );
  });
});
