const express = require("express");
const router = express.Router()
const educationModel = require('../models/education');

// POST(CREATE): an endpoint that will insert client education info into a DB.
router.post('/', (req, res, next) => {
    educationModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        }
        else {
            res.send('Client education info is added to the database.');
        }
    });
});


// GET(READ): an endpoint to get all clients education from the API.
router.get('/', (req, res, next) => {
    // The plain way to get all the data from the collection through the mongoose schema.
    educationModel.find((error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('Client doc  not found');
        }
        else {
            res.json(data);
        }
    }).sort({ modifyAt: -1 });  
});


// GET(READ): an endpoint to retrieve specific client education by client ID.
router.get('/:id', (req, res, next) => {

    // Finding document based on clientID
    educationModel.find({ clientId: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('Client not found');
        }
        else {
            res.json(data);
        }
    }).sort({ modifyAt: -1 });     // Only return the latest document
});


// DELETE: an endpoint to delete a client education by client id .
router.delete('/:id', (req, res, next) => {

    // Mongoose will use clientID of document.
    educationModel.remove({ clientId: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        }
        else {
            res.status(200).json({
                msg: data
            });
        }
    });
});

//update route for contactModel model
router.put('/:id', (req, res, next) => {
    educationModel.findOneAndUpdate({clientId: req.params.id}, {
        $set: req.body
      }, (error,data) => {
        if (error) {
          return next(error);
        } else if (data === null){
            res.status(404).send('educationModel info not found');
        } else {
            res.send('educationModel is edited via PUT');
            console.log('educationModel successfully updated!', data)
        }
    }).sort({ modifyAt: -1});
  });

// DELETE: an endpoint to delete a client education by education id.
router.delete('/educationId/:id', (req, res, next) => {

    // Mongoose will use clientID of document.
    educationModel.remove({ _id: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        }
        else {
            res.status(200).json({
                msg: data
            });
        }
    });
});

module.exports = router