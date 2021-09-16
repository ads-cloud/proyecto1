const mysql = require('mysql')

module.exports = class mysqlClas {
    config = mysql.createConnection({
        host: "localhost",
        user:"root",
        password:"",
        database:"test"
    })
constructor(){}

async consultar(consulta){
    try {
        this.config.connect()
        this.config.query(consulta,(err,row,fieds)=>{
            console.log(row);
        })
    } catch (error) {
        console.log(error);
    }finally{
        this.config.end
    }
}
}