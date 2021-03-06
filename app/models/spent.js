module.exports = function(sequelize, DataType) {
    const Spent = sequelize.define('spent', {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        adult_id: {
            type: DataType.INTEGER,
            allowNull: true
        },
        spent_type_id: {
            type: DataType.INTEGER,
            allowNull: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            notEmpty: true
        },
        value: {
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

    return Spent;
}