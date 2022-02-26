const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require("cors")
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => {
    console.log("connected to db")
})

const userRoutes = require('./src/routes/userRoutes')
const topicRoutes = require('./src/routes/topicRoutes')
userRoutes(app)
topicRoutes(app)

app.get('/', (req, res, next) => {
    res.json({status: 200, msg: "ok"})
})

app.listen(process.env.APP_PORT, () => {
    console.log(`Application à l'écoute sur le port ${process.env.APP_PORT}`)
})