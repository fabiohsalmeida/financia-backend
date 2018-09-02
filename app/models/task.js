module.exports = function(sequelize, DataType) {
    const Task = sequelize.define('task', {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        kid_id: {
            type: DataType.INTEGER,
            allowNull: false
        },
        name: {
            type: DataType.STRING,
            notEmpty: true
        },
        keeped_to_own_account: {
            type: DataType.BOOLEAN,
            defaultValue: false
        },
        donate: {
            type: DataType.BOOLEAN,
            defaultValue: false
        },
        finished: {
            type: DataType.BOOLEAN,
            defaultValue: false
        },
        reward: {
            type: DataType.DECIMAL,
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

    return Task;
}