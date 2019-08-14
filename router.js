var express = require('express');

var router = express.Router();

const index = require('./routes/index');
const user = require('./routes/user');
const bonus = require('./routes/bonus');

router.route('/').get(index.renderIndex); // api首页
router.route('/test').get(index.testConnection); // 测试连接

router.route('/major').get(user.getMajor); // 获取专业
router.route('/applicant').post(user.applicant); // 提交报名表

// 获取加分题类型
router.route('/getBonusType').get(bonus.getAllBonusType);
router.route('/getBonusTypeName').get(bonus.getAllBonusTypeName);
// 获取加分题
router.route('/getBonusById').get(bonus.getBonusById);
router.route('/getBonusByType').get(bonus.getBonusByType);
// 发布加分题或加分题类型
router.route('/createBonus').post(bonus.createBonus);
router.route('/createBonusType').post(bonus.createBonusType);

module.exports = router;