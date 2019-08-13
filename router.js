var express = require('express');

var router = express.Router();

const index = require('./routes/index');
const user = require('./routes/user');
const bonus = require('./routes/bonus');

router.route('/').get(index.renderIndex);
router.route('/test').get(index.testConnection);

router.route('/major').get(user.getMajor);
router.route('/applicant').post(user.applicant);

router.route('/getBonusType').get(bonus.getAllBonusType);
router.route('/getBonusTypeName').get(bonus.getAllBonusTypeName);
router.route('/getBonusById').get(bonus.getBonusById);
router.route('/getBonusByType').get(bonus.getBonusByType);
router.route('/createBonus').post(bonus.createBonus);
router.route('/createBonusType').post(bonus.createBonusType);

module.exports = router;