const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = Schema({
    name: { type: String, default: "", maxLength: 255 },
    description: { type: String, default: "", maxLength: 600 },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Course', Course)