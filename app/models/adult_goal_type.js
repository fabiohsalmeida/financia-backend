module.exports = function(sequelize, DataType) {
    const AdultGoalType = sequelize.define('adult_goal_type', {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        type: {
            type: DataType.STRING,
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

    return AdultGoalType;
}