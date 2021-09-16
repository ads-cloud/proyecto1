const app = require('./app')
const mongoose = require('mongoose')

if (typeof process.env.NODE_ENV === 'undefined') {
    require('dotenv').config()
}
const port = process.env.PORT

mongoose.connect(process.env.DB,(err, res)=>{
    if (err) throw err
    console.log('ok conexion db');
    app.listen(port,()=>{
        console.log(port);
    })
})
