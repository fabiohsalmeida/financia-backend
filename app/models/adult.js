module.exports = function(sequelize, DataType) {
    const Adult = sequelize.define('adult', {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataType.STRING,
            notEmpty: true
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
            notEmpty: true
        },
        city: {
            type: DataType.STRING
        },
        uf: {
            type: DataType.STRING
        },
        url_img: {
            type: DataType.STRING,
            defaultValue: ""
        },
        notification_id: {
            type: DataType.STRING,
            allowNull: true
        },
        age: {
            type: DataType.INTEGER,
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

    return Adult;
}