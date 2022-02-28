<<<<<<< HEAD
//suffian work
=======
const express = require("express");
const router = express.Router()
const ClientDocModel = require('../models/clientDoc');

// POST(CREATE): an endpoint that will insert client info into a DB.
router.post('/', (req, res, next) => {
    ClientDocModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        }
        else {
            res.send('Client doc info is added to the database.');
        }
    });
});


// GET(READ): an endpoint to get all clients from the API.
router.get('/', (req, res, next) => {
    // The plain way to get all the data from the collection through the mongoose schema.
    ClientDocModel.find((error, data) => {
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


// GET(READ): an endpoint to retrieve specific all client doc by client ID.
router.get('/:id', (req, res, next) => {

    // Finding document based on clientID
    ClientDocModel.find({ clientId: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('Client doc  not found');
        }
        else {
            res.json(data);
        }
    }).sort({ modifyAt: -1 });     // Only return the latest document
});

// GET(READ): an endpoint to retrieve doc detail by docId.
router.get('/docId/:id', (req, res, next) => {

    // Finding document based on document id
    ClientDocModel.find({ _id: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('Document   not found');
        }
        else {
            res.json(data);
        }
    }).sort({ modifyAt: -1 });     // Only return the latest document
});


// GET(READ): an endpoint to retrieve document by ssn no.
router.get('/ssn/:id', (req, res, next) => {

    // Finding document based on document ssn no.
    ClientDocModel.find({ ssn: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('Document  not found');
        }
        else {
            res.json(data);
        }
    }).sort({ modifyAt: -1 }).limit(1);     // Only return the latest document
});


// GET(READ): an endpoint to get all clients edit history from the API.
router.get('/history/:id', (req, res, next) => {

    ClientDocModel.find({ clientId: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('Client not found');
        }
        else {
            res.json(data);
        }
    }).sort({ modifyAt: -1 });
});


// DELETE: an endpoint to delete a client by client ID and modify time.
router.delete('/:id', (req, res, next) => {

    // Mongoose will use clientID of document.
    ClientDocModel.remove({ clientId: req.params.id }, (error, data) => {
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
>>>>>>> shaikh
