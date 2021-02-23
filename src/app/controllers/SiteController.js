const Course = require('../models/Course');
const { multipleMongooseToObject } =
require('../../util/mongoose');
class SiteController {

    // [GET] /
    index(req, res, next) {

        // Viết bằng function
        // Course.find({}, function(err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //     } else {
        //         next(err);
        //     }
        // });

        // Viết bằng promise
        Course.find({})
            .then(courses => {
                res.render('home', { courses: multipleMongooseToObject(courses) })
            })
            .catch(next);

    }

    // GET /search
    search(req, res) {
        res.send("SEARCH!");
    }
}

module.exports = new SiteController();