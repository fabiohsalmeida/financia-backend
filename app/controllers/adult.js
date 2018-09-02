const db = require('../models/index');
const AdultModel = require('../models/adult.js')(db.sequelize,db.Sequelize);

exports.create = function(req, res) {
    if(!req.body.name || !req.body.email || !req.body.age) {
        return res.status(400).send({
            message: "Adult name, email and age can't be empty."
        });
    }

    const adult = new AdultModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        city: req.body.city,
        uf: req.body.uf,
        url_img: req.body.url_img,
        notification_id: req.body.notification_id,
        age: req.body.age
    });

    adult.save()
        .then(function(data) {
            res.send(data);
        }).catch(function(err) {
            res.status(500).send({
                message: err.message || "Some error occured while creating adult."
            });
        });
};

exports.findAll = function(req, res) {
    AdultModel.findAll()
        .then( function(adults) {
            res.send(adults);
        }).catch(function(err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving all adult."
            });
        });
};

exports.findOne = function(req, res) {
    AdultModel.findOne({
        where: {
            id: req.params.adultId
        }
        }).then(function(adult) {
            console.log(`Usuário: ${adult}`);

            if(adult) {
                res.send(adult);
            } else {
                res.status(404).send({
                    message: "Adult not found"
                })
            }
        }).catch(function(err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving a single adult."
            });
        });
};

exports.update = function(req, res) {
    if(!req.body.name) {
        res.status(400).send({
            message: "Adult name can't be empty"
        });
    }

    AdultModel.update(
        {
            name: req.body.name
        },
        {
            where: {
                id: req.params.adultId
            }
        }
    ).then(function(updateResult) {
        if(updateResult[0]===0) {
            return res.status(404).send({
                message: `Adult not found with ID ${req.params.adultId}.`
            });
        } else if(updateResult[0]===1) {
            return res.status(200).send({
                message: `Adult with ID ${req.params.adultId} updated successfully.`
            });
        } else {
            return res.status(500).send({
                message: `Error while updating adult with ID ${req.params.adultId}`
            });
        }
    });
};

exports.delete = function(req, res) {
    //Do nothing;
};