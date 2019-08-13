'use strict';

const sequelize = require('./db').sequelize();

const Applicant = sequelize.import('./applicant');
const Bonus = sequelize.import('./bonus');
const BonusType = sequelize.import('./bonus_type');

// 同步模型到数据库中
sequelize.sync({force: false});

exports.Applicant = Applicant;
exports.Bonus = Bonus;
exports.BonusType = BonusType;