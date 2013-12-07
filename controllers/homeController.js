var index = function (req, res) {
    res.render('index', { message: 'Welcome to Shopping list' });

}

module.exports = {
    index:index
}
