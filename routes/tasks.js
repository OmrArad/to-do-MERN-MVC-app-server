const Task = require("../controllers/tasks")
// const Task = require("../models/task")
const express = require("express")
const router = express.Router()

router.post("/", Task.addTask)

router.get("/", Task.getTasks)

router.put("/:id", Task.updateTask)

router.delete("/:id", Task.deleteTask)

module.exports = router