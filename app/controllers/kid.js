const db = require('../models/index');
const KidModel = require('../models/kid.js')(db.sequelize,db.Sequelize);

exports.create = function(req, res) {
    if(!req.body.name) {
        return res.status(400).send({
            message: "Kid name can't be empty."
        });
    }

    const kid = new KidModel({
        name: req.body.name
    });

    kid.save()
        .then(function(data) {
            res.send(data);
        }).catch(function(err) {
            res.status(500).send({
                message: err.message || "Some error occured while creating kid."
            });
        });
};

exports.findAll = function(req, res) {
    KidModel.findAll()
        .then( function(kids) {
            res.send(kids);
        }).catch(function(err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving all kid."
            });
        });
};

exports.findOne = function(req, res) {
    KidModel.findOne({
        where: {
            id: req.params.kidId
        }
        }).then(function(kid) {
            console.log(`Usuário: ${kid}`);

            if(kid) {
                res.send(kid);
            } else {
                res.status(404).send({
                    message: "Kid not found"
                })
            }
        }).catch(function(err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving a single kid."
            });
        });
};

exports.update = function(req, res) {
    if(!req.body.name) {
        res.status(400).send({
            message: "Kid name can't be empty"
        });
    }

    KidModel.update(
        {
            name: req.body.name
        },
        {
            where: {
                id: req.params.kidId
            }
        }
    ).then(function(updateResult) {
        if(updateResult[0]===0) {
            return res.status(404).send({
                message: `Kid not found with ID ${req.params.kidId}.`
            });
        } else if(updateResult[0]===1) {
            return res.status(200).send({
                message: `Kid with ID ${req.params.kidId} updated successfully.`
            });
        } else {
            return res.status(500).send({
                message: `Error while updating kid with ID ${req.params.kidId}`
            });
        }
    });
};

exports.delete = function(req, res) {
    //Do nothing;
};