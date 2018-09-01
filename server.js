const express = require('express'); //Assists us to build and prepare connections/routes easier
const passport = require('passport'); //Assists us with authentication
const session = require('express-session'); //
const bodyParser = require('body-parser');
const env = require('dotenv').load();
const models = require("./app/models");
let app = express();


//For BodyParser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//For Passaport
app.use(session({secret:'keyboard cat', resave:true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());
//Sync database
models.sequelize.sync().then(function() {
    console.log("FinanCia database is ready.")
}).catch(function(err) {
    console.log(err, "Something went wrong while connecting to FinanCia.")
});

// Default route
app.get('/', function(req, res) {
    res.json({"message": "Welcome to Arbitrium Project."});
});

// Other routes
require('./app/routes/user.js')(app);

// Start server
app.listen(3000, function(err) {
    console.log("Server is listening on port 3000");
});