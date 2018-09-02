const db = require('../models/index');
const taskModel = require('../models/task.js')(db.sequelize,db.Sequelize);

exports.unfishedTasksByKidId = function(req, res) {
    taskModel.find({
        where: {
            finished: false,
            kid_id: req.params.kidId
        }
    })
    .then( function(tasks) {
            res.send(tasks);
        }).catch(function(err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving all task."
            });
        });
};
