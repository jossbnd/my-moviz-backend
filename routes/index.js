var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

const api_key = process.env.API_KEY;

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`)
    .then(res => res.json())
    .then(data => {
        res.json({ movies: data.results })
    })
})


module.exports = router;
