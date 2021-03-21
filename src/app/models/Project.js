const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Project = new Schema(
    {
        name: { type: String, required: true },
        address: { type: String },
        image: { type: String },
        area: { type: String },
        building_density: { type: String },
        investor: { type: String },
        status: { type: String },
        total_price: { type: String },
        price_m2: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

// Add plugins
mongoose.plugin(slug);
Project.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Project', Project);
