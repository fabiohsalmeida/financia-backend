module.exports = function(sequelize, DataType) {
    const KidGoal = sequelize.define('kid_goal', {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        kid_id: {
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
    }, {
        underscored: true
    });

    return KidGoal;
}