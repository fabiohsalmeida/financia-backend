module.exports = function(app) {
    var adultGoalController = require('../controllers/adult_goal.js');

    //Retrieve all goals of a type and adult id
    app.get('/goals/:goalTypeId/adult/:adultId', adultGoalController.findAdultGoalsByGoalTypeAndAdultId);
}