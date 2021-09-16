const seguridad  = require('../services/seguridad')
const isAuth = (req, res, next) =>{
   
    console.log(req.header.authorization)
    try {
        const auth = req.header.authorization
        if (!auth) {throw 'error...'}
        const token = auth.replace('Bearer ','')
        const payload = seguridad.decodeToken(token)
        if(payload.status !== 200){throw 'error....'}
        next()
    } catch (error) {
        res.status(203).send({err:'algo fallo'})
    }
    
}

module.exports = isAuth