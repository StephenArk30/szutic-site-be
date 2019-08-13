/* GET home page. */
exports.renderIndex = (req, res) => {
  res.render('index', {title: 'SZUTIC'});
};

exports.testConnection = (req, res) => {
    res.status(200).json({
        success: true,
        msg: '连接成功'
    })
};