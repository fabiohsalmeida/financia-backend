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

//Load models with dependencies
db.tasks = require('./task.js')(sequelize, Sequelize);
db.goals = require('./goal.js')(sequelize, Sequelize);

//Build many-to-many relations 
db.adults.belongsToMany(db.kids,{through: 'AdultKid'});
db.kids.belongsToMany(db.adults,{through: 'AdultKid'});

//Kid relations
db.kids.hasMany(db.goals);
db.kids.hasMany(db.tasks);
db.goals.belongsTo(db.kids);
db.tasks.belongsTo(db.tasks);

module.exports = db;