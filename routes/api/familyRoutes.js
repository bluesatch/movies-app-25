const router = require('express').Router()
const axios = require('axios')

// http://localhost:3000/family
router.get('/', (req, res)=> {

    const url = 'https://api.sampleapis.com/movies/family/'

    axios.get(url)
    .then(resp => {
        res.render('pages/allMovies', {
            title: 'Family',
            name: 'Family',
            data: resp.data,
            endpoint: 'family'
        })
    })
})

// single page
router.get('/:id', (req, res)=> {
    const id = req.params.id
    const url = `https://api.sampleapis.com/movies/family/${id}`

    axios.get(url)
    .then(resp => {
        console.log(resp.data)
        // res.send('success')
        res.render('pages/singleMovie', {
            title: resp.data.title,
            name: resp.data.title,
            img: resp.data.posterURL,
            imdbLink: resp.data.imdbId,
        })
    })
})

module.exports = router