var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

const api_key = process.env.API_KEY;

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0e782c931f8adb40a66dab66f8668126`)
    .then(res => res.json())
    .then(data => {
        res.json({ movies: data.results })
    })
})


module.exports = router;
