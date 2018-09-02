module.exports = function(sequelize, DataType) {
    const AdultsKids = sequelize.define('adults_kid', {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        kid_id: {
            type: DataType.INTEGER,
            allowNull: false,
            notEmpty: true
        },
        adult_id: {
            type: DataType.INTEGER,
            allowNull: false,
            notEmpty: true
        },
        created_at: {
            type: DataType.DATE,
            allowNull: true,
            defaultValue: DataType.NOW
        },
        updated_at: {
            type: DataType.DATE,
            allowNull: true,
            defaultValue: DataType.NOW
        }
    }, {
        underscored: true
    });

    return AdultsKids;
}