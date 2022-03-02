//import and load express app on a port we want to use
const express = require('express')
const app = express()
const port = 8080;

const mongoose = require("mongoose");  // Require mongoose library

// making our configuration file with an environment variable and requiring it
require("dotenv").config();

//mongoose connection
mongoose.connect(process.env.Mongo_URL)
//runs the connection request if successful

//Load up our other libraries (mongoose for schema and morgan for logging help)

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

//Declare the port
const PORT = process.env.PORT || 8080;

//req.body
app.use(express.json()); 
//enable incoming request logging in dev mode
app.use(morgan("dev"));

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
// router residence
const residence = require('./routes/residence')
app.use('/residence', residence)
//router family
//const family = require('./routes/family')
//app.use('/family', family)
//router health
//const health = require('./routes/health')
//app.use('/health', health)
//router income
const income = require('./routes/income')
app.use('/income', income)
//router intake
//const intake = require('./routes/intake')
//app.use('/intake', intake)
//router worker
//const worker = require('./routes/worker')
//app.use('/worker', worker)
//end routers setting

//index page
app.get('/', (req, res) => {
  //we will send a string back
  res.send('Welcome to Team 15\'s Index Page for the Project!')
});
