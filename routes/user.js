const Applicant = require('../models').Applicant;
const static = require('../static/public');
const util = require('../utils/util');

exports.applicant = (req, res) => {
    // console.log('req.body: ', req.body);
    let userInfo = req.body.userInfo;
    Applicant.create(userInfo)
        .then((data) => {
            // console.log(data.dataValues.id);
            res.status(200).json({
                success: true,
                msg: '报名成功',
                id: data.dataValues.id
            });
        })
        .catch((err) => {
            res.status(400).json({
                success: false,
                msg: '报名失败', err
            });
        });
};

exports.getMajor = (req, res) => {
    let collegeMajors = static.major;
    let majorList = [];
    let i = 0, j = 0; // 学院 + 专业4位
    collegeMajors.forEach(college => {
        college.forEach(major => {
            majorList.push({
                value: i + '' + util.pad(j, 4),
                label: major
            });
            j++;
        });
        i++;
    });
    res.status(200).json({
        success: true,
        majorList
    });
};