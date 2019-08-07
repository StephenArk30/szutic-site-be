/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('applicant', {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            field: 'id'
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
            field: 'name'
        },
        gender: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'gender'
        },
        major: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'major'
        },
        cardId: {
            type: DataTypes.STRING(20),
            allowNull: false,
            field: 'card_id'
        },
        intro: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'intro'
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: false,
            field: 'phone'
        },
        nativeHome: {
            type: DataTypes.STRING(20),
            allowNull: true,
            field: 'native_home'
        },
        skills: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: 'skills'
        },
        createTime: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            field: 'CreateTime'
        }
    }, {
        tableName: 'applicant'
    });
};
