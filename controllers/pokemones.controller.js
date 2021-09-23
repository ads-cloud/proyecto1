const pokemon = require('../models/pokemon.model')
const uuid = require('uuid');
const axios = require('axios');

const url  = 'https://pokeapi.co/api/v2/pokemon/';

const listarPokemones = (req, res) => {
    pokemon.find({}, (err, pokemones) => {
        if (err) return res.status(500).send({ err: ' algo fallo: ' + err })
        return res.status(200).send({ results: pokemones.map(({ nombre, uuid, url }) => ({ nombre, uuid, url })) })
    })
}

const byName = (req, res) => {
     pokemon.find({nombre:req.params.name}, (err, pokemones) => {
        if (err) return res.status(500).send({ err: ' algo fallo: ' + err })
        return res.status(200).send({ results: pokemones.map(({ nombre, uuid, url }) => ({ nombre, uuid, url })) })
    })
}

const agregarpokemon = (req, res) => {
    const { nombre, url } = req.body
    const schemaPokemon = new pokemon({ nombre, url, uuid: uuid.v4() })
    schemaPokemon.save(err => {
        if (err) return res.status(500).send({ err: ' algo fallo: ' + err })
        return res.status(200).send({ ok: true })
    })
}

module.exports = {
    listarPokemones,
    agregarpokemon,
    byName
}