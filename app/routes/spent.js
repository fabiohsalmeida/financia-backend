module.exports = function(app) {
    var spentController = require('../controllers/spent.js');

    //Retrieve all goals of a type and adult id
    app.get('/spents/:spentTypeId/adult/:adultId', spentController.findSpentsBySpentTypeAndAdultId);
}