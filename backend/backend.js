//import and load express app on a port we want to use
const express = require('express')
const app = express()
const port = 8080;


 //Load up our other libraries (mongoose for schema and morgan for logging help)
const mongoose = require("mongoose");
//Adding better logging functionality
const morgan = require("morgan");

// making our configuration file with an environment variable and requiring it
require("dotenv").config();

//mongoose connection
mongoose.connect(process.env.Mongo_URL)
  //runs the connection request if successful


// Import cors module.
const cors = require('cors');


//In the production systems, we should not hardcode the sensitive data like API Keys, 
//Secret Tokens, etc directly within the codebase (based on the Twelve factor App method). 
// We will pass them as environment variables. This module helps us to load environment variables from a .env file into process.env
require("dotenv").config();   // Require the dotenv

// setting up mongoose DB connection
mongoose
  .connect(process.env.MONGO_URL)   // read environment varibale from .env

  .then(() => {
    console.log("Database connection Success!");
    app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
  })
  //if error in connecting for some reason it is logged
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });


//req.body
app.use(express.json()); 
//enable incoming request logging in dev mode
app.use(morgan("dev"));


let FamilyModel = require('./models/family');


let workerModel = require('./models/worker');

// Setting up routers
//route clients
const clientsRouter = require('./routes/clients')
app.use('/clients', clientsRouter)
//router client doc
const clientsDocRouter = require('./routes/clientDoc')
app.use('/clients-doc', clientsDocRouter)
// router education
const education = require('./routes/education')
app.use('/education', education)
// router contact
const contact = require('./routes/contact')
app.use('/contact', contact)
// router employment
const employment = require('./routes/employment')
app.use('/employment', employment)
// router employment
const residence = require('./routes/residence')
app.use('/residence', residence)
//end routers setting


const PORT = process.env.PORT || 8080; //Declare the port number


//index page
app.get('/', (req, res) => {
  //we will send a string back
  res.send('Welcome to Team 15\'s Index Page for the Project!')
});

app.get('/workers', (req, res) => {
  workerModel.find((error, data) => {
    if (error) {
      //here we are using a call to next() to send an error message back
      return next(error)
    } else {
      res.json(data)
    }
  });
});

app.post('/worker', (req, res, next) => {
  workerModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
      res.send(data,'Worker is added to the database');
    }
  });
});

// endpoint that will create a student document
app.post('/student', (req, res, next) => {
  StudentModel.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        // res.json(data)
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

//retrieving student by studentID
// adding the : to the route path we can define a variable
app.get('/student/:id', (req, res) => {
    // Reading id from the URL
    const id = req.params.id;
    console.log(id);
    // Searching students for the id
    for (let student of students) {
        if (student.id === id) {
            res.json(student);
            return;
        }
    }
});


// live db : MONGO_URL = "mongodb+srv://appuser:cis4339@cluster0.ehvtv.mongodb.net/CIS4339?retryWrites=true&w=majority"

