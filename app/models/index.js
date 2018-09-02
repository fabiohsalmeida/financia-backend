"use strict";
 
//var fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, '..', 'config', 'sequelize_config.json'))[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);
let db = {};
  
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Load models without dependencies
db.adults = require('./adult.js')(sequelize, Sequelize);
db.kids = require('./kid.js')(sequelize, Sequelize);
db.adult_goal_types = require('./adult_goal_type')(sequelize, Sequelize);
db.spent_types = require('./spent_type')(sequelize, Sequelize);

//Load models with dependencies
db.tasks = require('./task.js')(sequelize, Sequelize);
db.kid_goals = require('./kid_goal.js')(sequelize, Sequelize);
db.adult_goals = require('./adult_goal.js')(sequelize, Sequelize);
db.spents = require('./spent.js')(sequelize, Sequelize);
db.adults_kids = require('./adults_kids.js')(sequelize, Sequelize);

//Build many-to-many relations 
db.adults.hasMany(db.adults_kids);
db.adults_kids.belongsTo(db.adults);
db.kids.hasMany(db.adults_kids);
db.adults_kids.belongsTo(db.kids);

//Kid relations
db.kids.hasMany(db.kid_goals);
db.kids.hasMany(db.tasks);
db.kid_goals.belongsTo(db.kids);
db.tasks.belongsTo(db.kids);

//Adult relations
db.adults.hasMany(db.spents);
db.spents.belongsTo(db.adults);
db.adults.hasMany(db.adult_goals);
db.adult_goals.belongsTo(db.adults);

//Adult goals relations
db.adult_goals.hasOne(db.adult_goal_types);
db.adult_goal_types.belongsTo(db.adult_goals);

//Adult spent relations
db.spents.hasOne(db.spent_types);
db.spent_types.belongsTo(db.spents);



module.exports = db;