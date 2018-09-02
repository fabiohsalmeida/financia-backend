module.exports = function(sequelize, DataType) {
    const Goal = sequelize.define('goal', {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        current_balance: {
            type: DataType.DECIMAL,
            defaultValue: 0
        },
        goal_balance: {
            type: DataType.DECIMAL
        },
        url_img: {
            type: DataType.STRING,
            defaultValue: ""
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
    });

    return Goal;
}