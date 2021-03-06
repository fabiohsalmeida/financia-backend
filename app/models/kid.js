module.exports = function(sequelize, DataType) {
    const Kid = sequelize.define('kid', {
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
        notification_id: {
            type: DataType.STRING
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

    return Kid;
}