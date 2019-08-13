/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('bonusType', {
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
        desc: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: 'desc'
        },
        cover: {
            type: DataTypes.STRING(200),
            allowNull: true,
            field: 'cover'
        }
    }, {
        tableName: 'bonus_type'
    });
};
