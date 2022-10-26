const WEATHER_BY_LOCATION = require('../utils/weatherByLocation');

// We call to the magic weather sensors to determine the weather for a location
const weatherService = (location) => {
    return WEATHER_BY_LOCATION.filter(e => e.location === location);
}

module.exports = weatherService;