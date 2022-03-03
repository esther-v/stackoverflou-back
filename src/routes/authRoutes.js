const withAuth = require('../withAuth')
const User = require('../models/user')

module.exports = (app) => {
    app.get('/ap/auth/checkToken', withAuth, async(req,res) => {
        const _id = req.body._id
        const user = await User.find({_id})

        res.json({status: 200, data: {msg: "Token valide", user: user[0]}})
    })
}