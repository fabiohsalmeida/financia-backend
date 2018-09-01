const db = require('../models/index');
const UserModel = require('../models/user.js')(db.sequelize,db.Sequelize);

exports.create = function(req, res) {
    //Do nothing;
};

exports.findAll = function(req, res) {
    UserModel.findAll()
        .then( function(users) {
            res.send(users);
        }).catch(function(err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving all user."
            });
        });
};

exports.findOne = function(req, res) {
    UserModel.findOne({
        where: {
            id: req.params.userId
        }
        }).then(function(user) {
            console.log(`Usuário: ${user}`);

            if(user) {
                res.send(user);
            } else {
                res.status(404).send({
                    message: "User not found"
                })
            }
        }).catch(function(err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving a single user."
            });
        });
};

exports.update = function(req, res) {
    //Do nothing;
};

exports.delete = function(req, res) {
    //Do nothing;
};