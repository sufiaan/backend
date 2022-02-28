const express = require("express");
const router = express.Router()
const ClientModel = require('../models/client');

// POST(CREATE): an endpoint that will insert client info into a DB.
router.post('/', (req, res, next) => {
    ClientModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        }
        else {
            res.send('Client info is added to the database.');
        }
    });
});


// GET(READ): an endpoint to get all clients from the API.
router.get('/', (req, res, next) => {
    // The plain way to get all the data from the collection through the mongoose schema.
    ClientModel.aggregate([{ $sort: { clientId: 1, modifyAt: 1 } },
    {
        $group:     // Group by client ID and only return the latest documents for each client.
        {
            _id: "$clientId",
            latest: { $last: "$$ROOT" }
        }
    }], (error, data) => {
        if (error) {
            return next(error);
        }
        else {
            res.json(data);
        }
    }).sort({ _id: 1 });
});


// GET(READ): an endpoint to retrieve specific client by client ID.
router.get('/:id', (req, res, next) => {

    // Finding document based on clientID
    ClientModel.find({ clientId: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('Client not found');
        }
        else {
            res.json(data);
        }
    }).sort({ modifyAt: -1 }).limit(1);     // Only return the latest document
});


// GET(READ): an endpoint to retrieve client by client last name.
router.get('/lastname/:lastName', (req, res, next) => {

    // Finding document based on client last name.
    ClientModel.aggregate([{ $sort: { clientId: 1, modifyAt: 1 } },
        { $group: { _id: "$clientId", latest: { $last: "$$ROOT" } } },
        { $match: { "latest.lastName": req.params.lastName } }
    ], (error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('Client not found');
        }
        else {
            res.json(data);
        }
    }).sort({ _id: 1 });
});





// DELETE: an endpoint to delete a client by client ID and modify time.
router.delete('/:id', (req, res, next) => {

    // Mongoose will use clientID of document.
    ClientModel.remove({ clientId: req.params.id }, (error, data) => {
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