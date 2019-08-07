'use strict';

var Sequelize = require('sequelize');

exports.sequelize = function () {
    return new Sequelize(
        'szutic_site', // database
        'root', // username
        'szutic', // password
        {
            host: 'www.szutic.club', // 数据库地址
            port: 3306, // 端口号
            logging: console.log,
            timezone: '+08:00',
            dialect: "mysql",
            dialectOptions: {
                charset: "utf8mb4",
                supportBigNumbers: true,
                bigNumberStrings: true
            }
        }
    );
};