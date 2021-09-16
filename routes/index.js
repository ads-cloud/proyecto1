const express = require('express')
const api = express.Router()
const auth = require('../middelwares/auth')
const pokemonesController = require('../controllers/pokemones.controller')

api.get('/listar',pokemonesController.listar)
api.get('/token',pokemonesController.nuevoToken)
api.post('/prueba-token',auth, pokemonesController.verificarToken)
api.post('/agregar', pokemonesController.agregarPokemon)
api.get('/obtener', pokemonesController.listarPokemones)
api.get('/obtener-dos', pokemonesController.listarPokemonesDos)

module.exports = api