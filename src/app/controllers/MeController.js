const Project = require('../models/Project');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/projects
    storedProjects(req, res, next) {
        Promise.all([Project.find({}), Project.countDocumentsDeleted()])
            .then(([projects, deletedCount]) =>
                res.render('me/stored-projects', {
                    deletedCount,
                    projects: mutipleMongooseToObject(projects),
                }),
            )
            .catch(next);
    }

    // [GET] /me/trash/projects
    trashProjects(req, res, next) {
        Project.findDeleted({})
            .then((projects) =>
                res.render('me/trash-projects', {
                    projects: mutipleMongooseToObject(projects),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
