// Example code for using native Javascript Mongo client
const express = require('express')
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

app.use(cors());

// Configuring express middleware
// helps us decode the body from an HTTP request (this is called body-parser)
// What the body-parser middleware will be doing is grabbing the HTTP body, decoding the information,
// and appending it to the req.body. From there, we can easily retrieve the information from a request.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//will hold our handle to the DB connection
let studentsDB;

let connectionString = `mongodb://localhost:27017/StudentRecords`

MongoClient.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, client) {
        studentsDB = client.db();
        app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
    }
);

// create an endpoint that will insert a student into a DB
app.post('/student', (req, res) => {
    //store the request body into a variable
    const student = req.body;

    // Output the student data to the console for debugging
    console.log(student);

    // create a new document in the students collection
    studentsDB.collection('students').insertOne(req.body, function (err, info) {
        // some more debugging info
        console.log(err);
        console.log(info);
        res.send('Student is added to the database');
    });
});


//create an endpoint to get all students from the API
app.get('/students', (req, res) => {
    // getting all the data from the collection students
    studentsDB.collection('students').find().toArray(function (err, items) {
       //print items to console
        console.log(items);

//Optional:
//     // sort matched documents in descending order by studentID
//     studentsDB.collection('students').find().sort({studentID: -1}).toArray(function (err, items) {
//     // Include only the `firstName` and `lastName` fields in the returned document
//     studentsDB.collection('students').find().project({firstName:1 , lastName : 1}).toArray(function (err, items) {
//   };
        res.json(items);
    });
});

// retrieving student by studentID
// adding the : to the route path we can define a variable
app.get('/student/:id', (req, res) => {
    // Reading id from the URL
    const id = parseInt(req.params.id);
    console.log(typeof id);

    // Searching students for the id use find or findOne
    studentsDB.collection('students').findOne({studentID: id}, function (err, item) {
        if (err) {
            // Sending 500 when not found something is a good practice
            res.status(500).send('error occured');
        }

        if (item === null) {
            // Sending 404 when not found something is a good practice
            res.status(404).send('Student not found');
        } else {
            res.json(item);
        }
    });
});

//delete a student by id
app.delete('/student/:id', (req, res) => {
    // Reading id from the URL
    const id = req.params.id;

    // Remove item student ID
    studentsDB.collection('students').deleteOne(
        { studentID: id },
        function () {
            res.send('Successfully deleted!')
        }
    )
});

// Updating - editing a student - we want to use PUT
app.put('/student/:id', (req, res) => {
    // Reading id from the URL
    const id = parseInt(req.params.id);

    // updating a student by it's ID and new data
    studentsDB.collection('students').findOneAndUpdate({ studentID: id },
        { $set: req.body }, function () {
            res.send('Student is edited via PUT');
        }
    )
});
