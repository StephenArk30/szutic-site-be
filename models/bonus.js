/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('bonus', {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        title: {
            type: DataTypes.STRING(45),
            allowNull: false,
            field: 'title'
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: 'content'
        },
        difficulty: {
            type: DataTypes.INTEGER(2),
            allowNull: true,
            field: 'difficulty'
        },
        type: {
            type: DataTypes.INTEGER(3),
            allowNull: false,
            field: 'type'
        },
        desc: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: 'desc'
        }
    }, {
        tableName: 'bonus'
    });
};
