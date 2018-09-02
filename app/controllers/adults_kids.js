const db = require('../models/index');

exports.findKidsByAdultId = async function(req, res) {
    const kids = await db.sequelize.query(
        'SELECT id, kid_id, adult_id, created_at, updated_at FROM adults_kids WHERE adult_id=:adultId',
        { replacements: { 
            adultId: req.params.adultId
        }, type: db.sequelize.QueryTypes.SELECT
    });

    res.send(kids);
};

exports.findAdultsByKidId = async function(req, res) {
    const adults = await db.sequelize.query(
        'SELECT id, kid_id, adult_id, created_at, updated_at FROM adults_kids WHERE kid_id=:kidId',
        { replacements: { 
            kidId: req.params.kidId
        }, type: db.sequelize.QueryTypes.SELECT
    });

    res.send(adults);
};