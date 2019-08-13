const Bonus = require('../models').Bonus;
const BonusType = require('../models').BonusType;
const config = require('../config');

exports.getAllBonusType = (req, res) => {
    BonusType.findAll()
        .then((bonusTypes => {
            res.status(200).json({
                success: true,
                bonus_types: bonusTypes
            });
        }));
};

exports.getAllBonusTypeName = (req, res) => {
    BonusType.findAll({
        attributes: ['id', 'title']
    })
        .then((bonusTypes => {
            res.status(200).json({
                success: true,
                bonus_types: bonusTypes
            });
        }));
};

exports.getBonusByType = (req, res) => {
    let type = req.query.type;
    Bonus.findAll({
        where: {type},
        attributes: ['id', 'title', 'desc', 'difficulty']
    })
        .then(bonus => {
            res.status(200).json({
                success: true,
                bonus
            });
        });
};

exports.getBonusById = (req, res) => {
    let id = req.query.id;
    Bonus.findOne({
        where: {id},
    })
        .then(bonus => {
            res.status(200).json({
                success: true,
                bonus
            });
        });
};

exports.createBonus = (req, res) => {
    // console.log('req.body: ', req.body);
    let token = req.body.token;
    if (token !== config.token) {
        res.status(400).json({
            success: false,
            msg: '口令错误'
        });
        return;
    }
    let bonusInfo = req.body.bonusInfo;
    Bonus.create(bonusInfo)
        .then((data) => {
            // console.log(data.dataValues.id);
            res.status(200).json({
                success: true,
                msg: '发布成功',
                id: data.dataValues.id
            });
        })
        .catch((err) => {
            res.status(400).json({
                success: false,
                msg: '发布失败',
                err
            });
        });
};

exports.createBonusType = (req, res) => {
    // console.log('req.body: ', req.body);
    let token = req.body.token;
    if (token !== config.token) {
        res.status(400).json({
            success: false,
            msg: '口令错误'
        });
        return;
    }
    let bonusInfo = req.body.bonusInfo;
    BonusType.create(bonusInfo)
        .then((data) => {
            // console.log(data.dataValues.id);
            res.status(200).json({
                success: true,
                msg: '发布成功',
                id: data.dataValues.id
            });
        })
        .catch((err) => {
            res.status(400).json({
                success: false,
                msg: '发布失败',
                err
            });
        });
};