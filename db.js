const mongoose = require("mongoose")

module.exports = async () => {
    try {
        await mongoose.connect(
            "mongodb://127.0.0.1:27017/to-do-app",
        )
        console.log("Connected to database.")
    } catch (error) {
        console.log("Could not connect to database.", error)
    }
}