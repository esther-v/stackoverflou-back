const express = require('express')
const router = express.Router()
const User = require('../models/User')

//create a user
router.post('/',(req,res) => {
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })
    // try {
    //     const savedUser = await user.save()
    //     res.json(savedUser)
    //     console.log(savedUser)
    // } catch (error) {
    //     res.json({message: error})
    //     console.log('erreur')
    // }
    // console.log(req.body)
    user.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            console.log(err)
        })
})


module.exports = router