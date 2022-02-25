const bcrypt = require('bcrypt')
const saltRounds = 10
const secret = "pitichat"

module.exports = (app) => {
    const User = require('../models/user')

    //creer user
    app.post('/api/user/save', async (req, res) => {
        const hash = await bcrypt.hash(req.body.password, saltRounds)

        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            nickname: req.body.nickname,
            email: req.body.email,
            password: hash,
            creationDate: new Date()
        }

        const user = await User(data)
        const result = await user.save()
        res.json({status: 200, result, result})
    })

    //Recuperer user
    app.get('/api/user/:id', async (req,res) => {
        const id = req.params.id

        const user = await User.find({_id: id})

        res.json({status: 200, user: user[0]})
    })

    //login
    app.post('/api/user/login', async (req, res) => {
       
        const user = await User.find({email: req.body.email})

        if(user.length <= 0) {
            res.json({status: 404, msg: "user email not found"})
        } else {
            const compare = await bcrypt.compare(req.body.password, user[0].password)

            if(compare){
                const payload = {email: user[0].email, id: user[0]._id}
                const token = jwt.sign(payload, secret)
                res.json({status: 200, data: {token, user: user[0]}})
            } else {
                res.json({status: 401, msg: "not allowed bad password"})
            }
        }
    })

}