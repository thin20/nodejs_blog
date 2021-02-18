class SiteController {

    // [GET] /
    index(req, res) {
        res.render('news');
    }

    // GET /search
    search(req, res) {
        res.send("SEARCH!");
    }
}

module.exports = new SiteController;