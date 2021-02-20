const Course = require('../models/Course');
class SiteController {

    // [GET] /
    index(req, res) {

        Course.find({}, function(err, courses) {
            if (!err) {
                res.json(courses);
            } else {
                res.status(400).json({ error: 'ERROR!!!' });
            }
        });

    }

    // GET /search
    search(req, res) {
        res.send("SEARCH!");
    }
}

module.exports = new SiteController;