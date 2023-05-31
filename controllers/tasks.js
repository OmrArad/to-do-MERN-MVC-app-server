const Task = require("../models/task")

async function addTask(req, res) {
    try {
        const task = await new Task(req.body).save()
        res.send(task)
    } catch (error) {
        res.send(error)
    }
}

async function getTasks(_, res) {
    try {
        const tasks = await Task.find()
        res.send(tasks)
    } catch (error) {
        res.send(error)
    }
}

async function updateTask(req, res) {
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id },
            req.body.task
        )
        res.send(task)
    } catch (error) {
        res, send(error)
    }
}

async function deleteTask(req, res) {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        res.send(task)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    addTask,
    getTasks,
    updateTask,
    deleteTask
}