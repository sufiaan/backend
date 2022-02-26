//import and load express app on a port we want to use
const express = require('express')
const app = express()
const port = 8080;

 //Load up our other libraries (mongoose for schema and morgan for logging help)
const mongoose = require("mongoose");
const morgan = require("morgan");

// making our configuration file with an environment variable and requiring it
require("dotenv").config();

//mongoose connection
mongoose
  //use env for connect info
  .connect(process.env.MONGO_URL)
  //runs the connection request if successful
  .then(() => {
    console.log("Database connection Success!");
    app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
  })
  //if error in connecting for some reason it is logged
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });

//Declare the port
const PORT = process.env.PORT || 8080;

//req.body
app.use(express.json()); 
//enable incoming request logging in dev mode
app.use(morgan("dev"));

//index page
app.get('/', (req, res) => {
  //we will send a string back
  res.send('Welcome to Team 15\'s Index Page for the Project!')
})


//template for something like retrieving a family or a worker.
//retrieving family by id
// adding the : to the route path we can define a variable
app.get('/family/:id', (req, res) => {
    // Reading id from the URL
    const id = req.params.id;
    console.log(id);
    // Searching families for the id
    for (let family of families) {
        if (family.id === id) {
            res.json(family);
            return;
        }
    }
});

app.get('/worker/:id', (req, res) => {
  // Reading id from the URL
  const id = req.params.id;
  console.log(id);
  // Searching workers for the id
  for (let worker of workers) {
      if (worker.id === id) {
          res.json(worker);
          return;
      }
  }
});