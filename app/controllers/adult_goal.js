const db = require('../models/index');
const AdultGoalModel = require('../models/adult_goal.js')(db.sequelize,db.Sequelize);

exports.findAdultGoalsByGoalTypeAndAdultId = function(req, res) {
    AdultGoalModel.findAll({
        where: {
            adult_goal_type_id: req.params.goalTypeId,
            adult_id: req.params.adultId
        }
    })
    .then( function(goals) {
            res.send(goals);
        }).catch(function(err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving all adult goals."
            });
        });
};