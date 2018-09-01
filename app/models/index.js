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
db.users = require('./user.js')(sequelize, Sequelize);

module.exports = db;