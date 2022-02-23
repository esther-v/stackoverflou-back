const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Topic = require('../models/Topic')
const Message = require('../models/Message')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

//create a user
router.post('/users', async (req,res) => {
 
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        nickname: req.body.nickname,
        email: req.body.email,
        password: req.body.password,
    })
    try {
        const savedUser = await user.save()
        res.json(savedUser)
        console.log(savedUser)
    } catch (error) {
        res.json({message: error})
        console.log('erreur')
    }
})

//create a new topic
router.post('/topics', async (req,res) => {
    const topic = new Topic({
        title: req.body.title,
        description: req.body.description,
    })

    try {
        const savedTopic = await topic.save()
        res.json(savedTopic)
    } catch (error) {
        res.json({message: error})
        console.log('erreur')
    }

})

//create a new message



module.exports = router