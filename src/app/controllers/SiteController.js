const Project = require('../models/Project');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Project.find({})
            .then((projects) => {
                res.render('home', {
                    projects: mutipleMongooseToObject(projects),
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
