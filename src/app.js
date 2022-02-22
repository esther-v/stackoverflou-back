const {json} = require("express")
const express = require("express")
const app = express()
require('dotenv').config()
const cors = require("cors")
const mongoose = require('mongoose')


const router = require("./routes")


app.use(cors())
app.use(json())

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("connected to db")
})

app.listen(process.env.APP_PORT, () => {
    console.log("Server running at port 8080")
})