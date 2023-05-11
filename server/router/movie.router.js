const { addMovie, getAllMovie } = require('../controller/movie.controller');

const router = require('express').Router();


router.post('/add' , addMovie);
router.get('/get/:limit/:page' , getAllMovie);

module.exports = router