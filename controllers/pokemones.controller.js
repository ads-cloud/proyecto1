const seguridad = require('../services/seguridad')
const pokemon = require('../models/pokemon.model')
const uuid = require('uuid')
const mysqlServices = require('../services/db')
const mysql = new mysqlServices()

const listar = (req,resp) => {
    return resp.status(200).send('listado')
}
const nuevoToken = (req, res)=>{
    return res.status(200).send({token: seguridad.crearToken()})
}

const verificarToken = (req, res) =>{
    return res.status(200).send('ok')
}

const agregarPokemon = (req, res) =>{
    console.log(req.body);
    const {nombre, peso, familia} = req.body
    const schemaPkemon = new pokemon({nombre, peso, familia, uuid:uuid.v4()})
    schemaPkemon.save(err =>{
        if (err) {return res.status(500).send('algo fallo: '+err)}
        return res.status(200).send({ok:true})
    })
}

const listarPokemonesDos = (req, res)=>{
    mysql.consultar('select * from pokemones')
    return res.status(200).send({ok:true})
}

const listarPokemones = (req, res)=>{
   
}

module.exports = {
    listar,
    nuevoToken,
    verificarToken,
    agregarPokemon,
    listarPokemones,
    listarPokemonesDos
}