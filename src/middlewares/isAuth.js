const jwt = require("jsonwebtoken")
const secret = process.env.SECRET

const isAuth = (request, response, next) => {
    const token = request.headers.authorization.slice(7)
    if(token === undefined){
        next()
    }
    else {
        jwt.verify(token, secret, (error, user) => {
            if(error) {
                response.send(error.message)
            }
            else {
                const {firstname, lastname, nickname, email, userId,exp} = user
                if (Date.now()/1000 >= exp) {
                    request.user = {firstname, lastname, nickname, email, userId}
                    next()
                }
            }
        })
    }
}

module.exports = isAuth