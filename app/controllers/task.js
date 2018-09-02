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

exports.calculateTotalDonate = async function(req, res) {
    const totalValue = await db.sequelize.query(
        'SELECT sum(reward) as totalValue from tasks where kid_id = :kidId and finished=:isFinished and donate=:isForDonate',
        { replacements: { 
            kidId: req.params.kidId,
            isFinished: 1,
            isForDonate: 1
        }, type: db.sequelize.QueryTypes.SELECT
    });

    res.send(totalValue);
};

exports.updateTaskList = async function(req, res) {
    const inputTaskList = req.body;

    for(let i=0; i<inputTaskList.length; i++) {
        if(inputTaskList[i].donate || inputTaskList[i].keeped_to_own_account) {
            await taskModel.update(
                {
                    donate: inputTaskList[i].donate,
                    keeped_to_own_account: inputTaskList[i].keeped_to_own_account,
                    finished: true
                },
                {
                    where: {
                        id: inputTaskList[i].id
                    }
                }
            );

            inputTaskList[i] = await taskModel.find({
                where: {
                    id: inputTaskList[i].id
                }
            });
        }
    }

    res.send(inputTaskList);
}