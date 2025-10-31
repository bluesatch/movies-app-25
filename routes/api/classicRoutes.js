const router = require('express').Router()
const axios = require('axios')

// http://localhost:3000/classic
router.get('/', (req, res)=> {

    const url = 'https://api.sampleapis.com/movies/classic/'

    axios.get(url)
    .then(resp => {
        res.render('pages/allMovies', {
            title: 'Classic',
            name: 'Classic',
            data: resp.data,
            endpoint: 'classic'
        })
    })
})

// single page
router.get('/:id', (req, res)=> {
    const id = req.params.id
    const url = `https://api.sampleapis.com/movies/classic/${id}`

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