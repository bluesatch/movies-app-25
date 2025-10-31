// IMPORT EXPRESS AND SET UP .Router()
const express = require('express')
const router = express.Router()

// localhost:3000/
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'My Movie App',
        name: 'My Movie App'
    })
})

const endpoints = [
    'comedy',
    'animation',
    'drama'
]

endpoints.forEach(endpoint => {
    router.use(`/${endpoint}`, require(`./api/${endpoint}Routes`))
})

// router.use('/comedy', require('./api/comedyRoutes'))
// router.use('/animation', require('./api/animationRoutes'))

// Error handling
router.use((req, res, next)=> {
    res.status(404).send('<h1>this page does not exist</h1>')
})

module.exports = router