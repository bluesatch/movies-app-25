const express = require('express')
const server = express()
const PORT = process.env.PORT || 3000

// STEP 2 => IMPORT ROUTER AND .USE ROUTES/ROUTER
const router = require('./routes/router')
server.use('/', router)

// set view engine
server.set('view engine', 'ejs')

// STEP 1 => BUILD SERVER AND LISTEN AT PORT
server.listen(PORT, ()=> console.log(`Server is listening at http://localhost:${PORT}`))