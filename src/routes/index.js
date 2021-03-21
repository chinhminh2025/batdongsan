const newsRouter = require('./news');
const meRouter = require('./me');
const projectsRouter = require('./projects');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/projects', projectsRouter);

    app.use('/', siteRouter);
}

module.exports = route;
