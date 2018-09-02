module.exports = function(app) {
    var taskController = require('../controllers/task.js');
    // Get unfinished tasks by kidId
    app.get('/tasks/unfinished/kid/:kidId', taskController.unfishedTasksByKidId);
}