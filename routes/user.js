const Applicant = require('../models').Applicant;

exports.applicant = (req, res) => {
    let userInfo = req.body.userInfo;
    Applicant.create(userInfo)
        .then((data) => {
            // console.log(data.dataValues.id);
            res.status(200).json({message: '报名成功', id: data.dataValues.id});
        })
        .catch((err) => {
            res.status(400).json({message: '报名失败', err});
        });
};