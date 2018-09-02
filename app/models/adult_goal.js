module.exports = function(sequelize, DataType) {
    const AdultGoal = sequelize.define('adult_goal', {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        },
        adult_id: {
            type: DataType.INTEGER,
            allowNull: false
        },
        adult_goal_type_id: {
            type: DataType.INTEGER,
            allowNull: false
        },
        current_balance: {
            type: DataType.FLOAT,
            allowNull: false,
            defaultValue: 0
        },
        percent: {
            type: DataType.FLOAT,
            allowNull: false
        },
        goal_balance: {
            type: DataType.FLOAT,
            allowNull: false
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