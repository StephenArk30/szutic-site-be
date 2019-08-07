var express = require('express');

var router = express.Router();

const index = require('./routes/index');
const user = require('./routes/user');

router.route('/').get(index.renderIndex);
router.route('/applicant').post(user.applicant);

module.exports = router;