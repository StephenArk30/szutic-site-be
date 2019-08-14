'use strict';

const Sequelize = require('sequelize');
const config = require('../config');

exports.sequelize = function () {
    return new Sequelize(
        config.db.database,
        config.db.username,
        config.db.password,
        {
            host: config.db.host, // 数据库地址
            port: config.db.port, // 端口号
            logging: console.log,
            timezone: '+08:00',
            dialect: "mysql",
            dialectOptions: {
                charset: "utf8mb4", // 支持中文
                supportBigNumbers: true,
                bigNumberStrings: true
            }
        }
    );
};