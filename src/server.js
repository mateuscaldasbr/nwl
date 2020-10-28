//Importar depedencia

const express = require('express');
const path = require('path');
const pages = require('./pages.js');   
//Iniciando o express
const server = express()

server
//Utilizando os arquvios estáticos
.use(express.static('public'))

// configurar template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')
//Criar uma rota
.get('/', pages.index)

// ligar o servidor
server.listen(5500)