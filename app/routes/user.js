module.exports = function(app) {
    var userController = require('../controllers/user.js');

    // Create a new user
    //app.post('/user', userController.create); //No need

    // Retrieve all users
    app.get('/users', userController.findAll);

    // Retrive a single user with user id
    app.get('/user/:userId', userController.findOne);

    // Update an user with user id
    app.put('/users/:userId', userController.update); //No need

    // Delete an user with user id
    //app.delete('/users/:userId', userController.delete); //No need
}