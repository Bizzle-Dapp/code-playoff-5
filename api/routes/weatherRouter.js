var express = require('express');
var router = express.Router();
let weatherService = require('../services/weatherService');

/* location data */
router.get('/:location', function (req, res, next) {
    const { location } = req.params;
    const weatherData = weatherService(location);
    res.json(weatherData[0]);
});

module.exports = router;