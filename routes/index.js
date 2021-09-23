const express = require('express')
const api = express.Router();

const pokemonesController = require('../controllers/pokemones.controller');

api.get('/listar', pokemonesController.listarPokemones)
api.post('/agregar', pokemonesController.agregarpokemon)
api.get('/:name', pokemonesController.byName)

module.exports = api