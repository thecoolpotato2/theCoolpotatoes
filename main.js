const express = require("express");
const app = express();
const port = 3000;

const frontend = require("./frontend.js");

app.use("/frontend", frontend);

app.listen(port, err => {
  if(err) {
    return console.log("Error happened" + err);
  } 
  console.log("listening on port " + port)
})