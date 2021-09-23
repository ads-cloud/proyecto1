const corsOption = (req, callback) =>{
    let options = {origin: false}
    let error = true
    if(req.header('Origin') === 'http://localhost:4200'){
        options = {origin:true}
        error = false
    }
    callback(error, options)
}

module.exports = corsOption