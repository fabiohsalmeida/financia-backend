module.exports = function(app) {
    var adultController = require('../controllers/adult.js');

    // Create a new adult
    app.post('/adult', adultController.create);

    // Retrieve all adults
    app.get('/adults', adultController.findAll);

    // Retrive a single adult with adult id
    app.get('/adult/:adultId', adultController.findOne);

    // Update an adult with adult id
    app.put('/adult/:adultId', adultController.update);

    // Delete an adult with adult id
    //app.delete('/adults/:adultId', adultController.delete);
}