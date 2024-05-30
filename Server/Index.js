const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const AgribusinessModel = require("./Model/Agribusinesses")





const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/agribusinesses ")

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    AgribusinessModel.findOne({email: email})
    .then(user => {
        if (user) {
            if(user.password === password) {
                res.json("success")
            } else {
                res.json("Password is incorrect")
            }
        } else {
            res.json("user not found")
        }
    })
})

app.post("/register", (req, res) => {
    AgribusinessModel.create(req.body)
    .then(agribusinesses => res.json(agribusinesses))
    .catch(err => res.json(err))
})



app.listen(3001, () => {
    console.log("Server is running successful")
})