const express = require("express");
const app = express();
let port = 1234;

let data = require("./main");

app.listen(port, (err) => {
  if (err) {
    console.log(`something went wrong ${err}`);
  } else {
    console.log(`server running on ${port}`);
  }
});

app.get("/gettime", function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  const result = data.createElement();
  res.write(result);
  res.end();
});
