const mongoose = require('mongoose')
// const Schema = mongoose.Schema

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

taskSchema.set('toObject', { virtuals: true });
taskSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model("task", taskSchema)