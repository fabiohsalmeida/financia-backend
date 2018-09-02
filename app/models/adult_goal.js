module.exports = function(sequelize, DataType) {
    const AdultGoal = sequelize.define('adult_goal', {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        adult_id: {
            type: DataType.INTEGER,
            allowNull: true
        },
        adult_goal_type_id: {
            type: DataType.INTEGER,
            allowNull: true
        },
        current_balance: {
            type: DataType.DECIMAL,
            defaultValue: 0
        },
        goal_balance: {
            type: DataType.DECIMAL
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

    return AdultGoal;
}