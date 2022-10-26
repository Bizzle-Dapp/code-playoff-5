const WEATHER_TYPES = require('./weatherTypes');

// This is the magic weather sensor
const WEATHER_BY_LOCATION = [{
    location: "England",
    day: [
        { time: "dawn", weather: WEATHER_TYPES[0] },
        { time: "morning", weather: WEATHER_TYPES[5] },
        { time: "afternoon", weather: WEATHER_TYPES[5] },
        { time: "evening", weather: WEATHER_TYPES[2] },
        { time: "night", weather: WEATHER_TYPES[2] },
    ],
    week: [
        { day: "monday", weather: WEATHER_TYPES[5] },
        { day: "tuesday", weather: WEATHER_TYPES[4] },
        { day: "wednesday", weather: WEATHER_TYPES[3] },
        { day: "thursday", weather: WEATHER_TYPES[2] },
        { day: "friday", weather: WEATHER_TYPES[1] },
        { day: "saturday", weather: WEATHER_TYPES[0] },
        { day: "sunday", weather: WEATHER_TYPES[6] },
    ]
}, {
    location: "Scotland",
    day: [
        { time: "dawn", weather: WEATHER_TYPES[2] },
        { time: "morning", weather: WEATHER_TYPES[3] },
        { time: "afternoon", weather: WEATHER_TYPES[2] },
        { time: "evening", weather: WEATHER_TYPES[4] },
        { time: "night", weather: WEATHER_TYPES[4] },
    ],
    week: [
        { day: "monday", weather: WEATHER_TYPES[3] },
        { day: "tuesday", weather: WEATHER_TYPES[4] },
        { day: "wednesday", weather: WEATHER_TYPES[3] },
        { day: "thursday", weather: WEATHER_TYPES[5] },
        { day: "friday", weather: WEATHER_TYPES[6] },
        { day: "saturday", weather: WEATHER_TYPES[7] },
        { day: "sunday", weather: WEATHER_TYPES[6] },
    ]
}, {
    location: "Wales",
    day: [
        { time: "dawn", weather: WEATHER_TYPES[3] },
        { time: "morning", weather: WEATHER_TYPES[4] },
        { time: "afternoon", weather: WEATHER_TYPES[4] },
        { time: "evening", weather: WEATHER_TYPES[4] },
        { time: "night", weather: WEATHER_TYPES[3] },
    ],
    week: [
        { day: "monday", weather: WEATHER_TYPES[4] },
        { day: "tuesday", weather: WEATHER_TYPES[4] },
        { day: "wednesday", weather: WEATHER_TYPES[3] },
        { day: "thursday", weather: WEATHER_TYPES[2] },
        { day: "friday", weather: WEATHER_TYPES[1] },
        { day: "saturday", weather: WEATHER_TYPES[0] },
        { day: "sunday", weather: WEATHER_TYPES[1] },
    ]
}, {
    location: "Ireland",
    day: [
        { time: "dawn", weather: WEATHER_TYPES[1] },
        { time: "morning", weather: WEATHER_TYPES[1] },
        { time: "afternoon", weather: WEATHER_TYPES[0] },
        { time: "evening", weather: WEATHER_TYPES[0] },
        { time: "night", weather: WEATHER_TYPES[1] },
    ],
    week: [
        { day: "monday", weather: WEATHER_TYPES[1] },
        { day: "tuesday", weather: WEATHER_TYPES[2] },
        { day: "wednesday", weather: WEATHER_TYPES[2] },
        { day: "thursday", weather: WEATHER_TYPES[2] },
        { day: "friday", weather: WEATHER_TYPES[1] },
        { day: "saturday", weather: WEATHER_TYPES[0] },
        { day: "sunday", weather: WEATHER_TYPES[6] },
    ]
}, {
    location: "Cornwall",
    day: [
        { time: "dawn", weather: WEATHER_TYPES[0] },
        { time: "morning", weather: WEATHER_TYPES[2] },
        { time: "afternoon", weather: WEATHER_TYPES[2] },
        { time: "evening", weather: WEATHER_TYPES[1] },
        { time: "night", weather: WEATHER_TYPES[0] },
    ],
    week: [
        { day: "monday", weather: WEATHER_TYPES[1] },
        { day: "tuesday", weather: WEATHER_TYPES[2] },
        { day: "wednesday", weather: WEATHER_TYPES[2] },
        { day: "thursday", weather: WEATHER_TYPES[3] },
        { day: "friday", weather: WEATHER_TYPES[6] },
        { day: "saturday", weather: WEATHER_TYPES[7] },
        { day: "sunday", weather: WEATHER_TYPES[1] },
    ]
},
]

module.exports = WEATHER_BY_LOCATION;