const express = require("express");
const router = express.Router();
const IncomeModel = require('../models/income');

//worker stuff
app.get('/worker', (req, res, next) => {
    FamilyModel.create(req.body, (error, data) => {
        if (error) {
          return next(error, "Error inserting data.")
        } else {
          res.send(data,'worker info is added to the database');
        }
    });
  });

  app.post('/worker', (req, res, next) => {
    FamilyModel.create(req.body, (error, data) => {
        if (error) {
          return next(error, "Error inserting data.")
        } else {
          res.send(data,'worker info is added to the database');
        }
    });
  });

  app.put('/worker', (req, res, next) => {
    FamilyModel.create(req.body, (error, data) => {
        if (error) {
          return next(error, "Error updating data.")
        } else {
          res.send(data,'worker info is updated in the database');
        }
    });
  });

  app.delete('/worker', (req, res, next) => {
    FamilyModel.create(req.body, (error, data) => {
        if (error) {
          return next(error, "Error removing data.")
        } else {
          res.send(data,'worker info is removed from the database');
        }
    });
  });


  /*
  
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

*/