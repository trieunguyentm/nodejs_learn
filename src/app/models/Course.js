const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)
const Schema = mongoose.Schema

const Course = Schema({
    name: { type: String, default: "", maxLength: 255 },
    description: { type: String, default: "", maxLength: 600 },
    slug: { type: String, slug: ["name"] }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Course', Course)