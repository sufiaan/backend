const express = require("express");
const router = express.Router();
const IncomeModel = require('../models/income');
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

//this is a template to work on.
//this is not functioning.
//page for deleting a family document to DB
app.delete('/family/:id', (req,res, next) => {
    FamilyModel.findOneAndRemove({ clientId: req.params.id}, (error, data) => {
      if (error) {
        return next(error);
      } else {
          res.status(200).json({
            msg: data
          });
        res.send('Family is deleted.');
      }
    });
  });


/*
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
*/