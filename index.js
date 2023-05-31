const tasks = require("./routes/tasks")
const connection = require('./db')
const express = require("express");
const cors = require("cors");

const app = express();

connection();

app.use(express.json())
app.use(cors())

app.use("/api/tasks", tasks)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port ${port}...`))