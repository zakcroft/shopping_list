var index = function (req, res) {
    res.render('index', { title: 'Shopping list' });

}

module.exports = {
    index:index
}
