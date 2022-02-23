const {json} = require("express")
const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

app.use(bodyParser.json())

//import routes
const routes = require("./routes")
app.use('/routes', routes)

app.use(cors())
app.use(json())

app.get('/', (req,res) => {
    res.send('We are on home')
})

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => {
        console.log("connected to db")
    })

app.listen(process.env.APP_PORT, () => {
    console.log("Server running at port 8080")
})