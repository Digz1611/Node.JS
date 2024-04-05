"use strict";

//Assign the express application 
//to the app constant.
const port = 3000,
  express = require("express"),
  app = express();
app

  //Set up a GET route
  //for the home page.
  .get("/", (req, res) => {
    console.log(req.params);
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);
    res.send("Hello, Universe!");
  })
  //Issue a response from the server 
  //to the client with res.send.

  //Set up the application 
  //to listen at port 3000
  .listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
  });
