const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = Schema({
    name: { type: String, default: "", maxLength: 255 },
    description: { type: String, default: "", maxLength: 600 },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
})

module.exports = mongoose.model('Course', Course)