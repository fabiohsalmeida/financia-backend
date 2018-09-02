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

    return Adult;
}