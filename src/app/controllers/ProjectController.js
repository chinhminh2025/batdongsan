const Project = require('../models/Project');
const { mongooseToObject } = require('../../util/mongoose');

class ProjectController {
    // [GET] /projects/:slug
    show(req, res, next) {
        Project.findOne({ slug: req.params.slug })
            .then((project) =>
                res.render('projects/show', {
                    project: mongooseToObject(project),
                }),
            )
            .catch(next);
    }

    // [GET] /projects/create
    create(req, res, next) {
        res.render('projects/create');
    }

    // [POST] /projects/store
    store(req, res, next) {      
        const project = new Project(req.body);
        project
            .save()        
            .then(() => res.redirect('/me/stored/projects'))
            .catch((error) => {});
    }

    // [GET] /projects/:id/edit
    edit(req, res, next) {
        Project.findById(req.params.id)
            .then((project) =>
                res.render('projects/edit', {
                    project: mongooseToObject(project),
                }),
            )
            .catch(next);
    }

    // [PUT] /projects/:id
    update(req, res, next) {
        Project.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/projects'))
            .catch(next);
    }

    // [DELETE] /projects/:id
    destroy(req, res, next) {
        Project.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /projects/:id/force
    forceDestroy(req, res, next) {
        Project.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /projects/:id/restore
    restore(req, res, next) {
        Project.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new ProjectController();
