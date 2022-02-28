// import/load the express library
const express = require('express')

// create an instance of an express application
const app = express()
const port = 8080;
//define what port to listen on
const mongoose = require("mongoose");  // Require mongoose library

// Import cors module.
const cors = require('cors');

//Adding better logging functionality
const morgan = require("morgan");


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
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });



app.use(express.json()); //allows us to access request body as req.body
app.use(morgan("dev"));  //enable incoming request logging in dev mode

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

//default route
app.get('/', (req, res) => {
  //we will send a string back
  res.send('Welcome to CIS 4339')
})


// add on
app.route('/Node').get(function(req,res)
{
    res.send("Tutorial on Node");
});
app.route('/Vue').get(function(req,res)
{
    res.send("Tutorial on Vue");
});

//create an endpoint to get all students from the API
app.get('/students', (req, res) => {
    res.json(students);

    //check results at https://jsonformatter.org/
});

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