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
    const db = require('./app/models/index.js');

    const adult_goal_types = require('./app/config/db/adult_goal_types.js');
    const spent_types = require('./app/config/db/spent_types.js');
    const adults = require('./app/config/db/adults.js');
    const adult_goals = require('./app/config/db/adult_goals.js');
    const spents = require('./app/config/db/spents.js');
    const kids = require('./app/config/db/kids.js');
    const tasks = require('./app/config/db/tasks.js');
    const kid_goals = require('./app/config/db/kid_goals.js');
    const adults_kids = require('./app/config/db/adults_kids.js');

    /* Cleaning database */
    adult_goal_types.forEach(adultGoalType => {
        db.adult_goal_types.destroy({
            where: { id: adultGoalType.id }
        });
    });

    spent_types.forEach(spentType => {
        db.spent_types.destroy({
            where: { id: spentType.id }
        });
    });

    adults.forEach(adult => {
        db.adults.destroy({
            where: { id: adult.id }
        });
    });

    adult_goals.forEach(adult_goal => {
        db.adult_goals.destroy({
            where: { id: adult_goal.id }
        });
    });

    spents.forEach(spent => {
        db.spents.destroy({
            where: { id: spent.id }
        });
    });

    kids.forEach(kid => {
        db.kids.destroy({
            where: { id: kid.id }
        });
    });

    tasks.forEach(task => {
        db.tasks.destroy({
            where: { id: task.id }
        });
    });

    kid_goals.forEach(kid_goal => {
        db.kid_goals.destroy({
            where: { id: kid_goal.id }
        });
    });

    adults_kids.forEach(adults_kid => {
        db.adults_kids.destroy({
            where: { id: adults_kid.id }
        });
    });

    /* Populating database */
    db.adult_goal_types.bulkCreate(adult_goal_types).then(
        db.spent_types.bulkCreate(spent_types).then(
            db.adults.bulkCreate(adults).then(
                db.adult_goals.bulkCreate(adult_goals).then(
                    db.spents.bulkCreate(spents).then(
                        db.kids.bulkCreate(kids).then(
                            db.tasks.bulkCreate(tasks).then(
                                db.kid_goals.bulkCreate(kid_goals).then(
                                    db.adults_kids.bulkCreate(adults_kids).then(
                                        console.log("FinanCia database is ready.")
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    );
}).catch(function(err) {
    console.log(err, "Something went wrong while connecting to FinanCia.")
});

// Default route
app.get('/', function(req, res) {
    res.json({"message": "Welcome to Arbitrium Project."});
});

// Other routes
require('./app/routes/adult.js')(app);
require('./app/routes/kid.js')(app);
require('./app/routes/task.js')(app);
require('./app/routes/adult_goal.js')(app);
require('./app/routes/spent.js')(app);
require('./app/routes/adults_kids.js')(app);

// Start server
app.listen(3000, function(err) {
    console.log("Server is listening on port 3000");
});