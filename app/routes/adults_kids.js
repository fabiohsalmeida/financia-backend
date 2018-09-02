module.exports = function(app) {
    var adultKidController = require('../controllers/adults_kids.js');

    app.get('/adult/:adultId/kids', adultKidController.findKidsByAdultId);
    
    app.get('/kid/:kidId/adults', adultKidController.findAdultsByKidId);
}