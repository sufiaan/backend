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
mongoose.connect(process.env.Mongo_URL)
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

let FamilyModel = require('./models/family');

let workerModel = require('./models/worker');

//index page
app.get('/', (req, res) => {
  //we will send a string back
  res.send('Welcome to Team 15\'s Index Page for the Project!')
});

app.get('/worker', (req, res) => {
  workerModel.find((error, data) => {
    if (error) {
      //here we are using a call to next() to send an error message back
      return next(error)
    } else {
      res.json(data)
    }
  });
});

app.post('/worker', (req, res) => {
  workerModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log(data)
      res.send('Student is added to the database');
    }
});
});

//this is a template to work on.
//this is not functioning.
//page for posting a family document to DB
app.get('/family', (req, res, next) => {
  FamilyModel.create(req.body, (error, data) => {
      if (error) {
        return next(error, "Error inserting data.")
      } else {
        res.send(data,'Family is added to the database');
      }
  });
});



// basic error handler from class (change this)
/*app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) 
      err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});*/