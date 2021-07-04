const express = require('express');
const bodyParser = require('body-parser');
//const dbConfig = require('./config/database.config');
//const mongoose = require('mongoose');



//create express app
const app = express();

//parse requests of content-type application/w-xxx-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

//parse requests of content-type - application/json
app.use(bodyParser.json());

//Configuring the database 
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Connecting to the databse
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the databse");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//define a simple route 
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of al your notes."});
});

//listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});