const db = require('../models/index');
const SpentModel = require('../models/spent.js')(db.sequelize,db.Sequelize);

exports.findSpentsBySpentTypeAndAdultId = function(req, res) {
    SpentModel.findAll({
        where: {
            spent_type_id: req.params.spentTypeId,
            adult_id: req.params.adultId
        }
    })
    .then( function(spents) {
            res.send(spents);
        }).catch(function(err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving all adult spents."
            });
        });
};