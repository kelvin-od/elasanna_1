const mongoose = require("mongoose")

const AgrbusinessSchema = new mongoose.Schema({
    name: String,
    company: String,
    email: String,
    password: String
})

const AgribusinessModel = mongoose.model("agribusinesses", AgrbusinessSchema)

module.exports = AgribusinessModel;