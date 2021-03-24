const router = require('express').Router();
const shows = require('../controllers/shows');

router.route('/').post(shows.getShows);

module.exports = router;