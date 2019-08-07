'use strict';

const sequelize = require('./db').sequelize();

const Applicant = sequelize.import('./applicant');

// 同步模型到数据库中
sequelize.sync({force: false});

exports.Applicant = Applicant;