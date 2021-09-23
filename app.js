const express = require('express');
const app = express();
const pokemonesRoutes = require('./routes')
const cors = require('cors')

const optionCors = require('./middelware/cors')

app.use(cors())
app.use(express.json())
app.use('/pokemon',cors(optionCors), pokemonesRoutes)

module.exports = app;