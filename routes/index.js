/* GET home page. */
exports.renderIndex = (req, res) => {
  res.render('index', {title: 'SZUTIC'});
};