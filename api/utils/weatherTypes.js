// In our world, only these types of weather exist.
const WEATHER_TYPES = [
    {
        type: "Sunshine",
        emoji: "☀️",
        recommendation: "Sunscreen"
    },{
        type: "Partially Cloudy",
        emoji: "🌥️",
        recommendation: "Jacket or Hoodie"
    },{
        type: "Cloudy",
        emoji: "☁️",
        recommendation: "Jacket, Hoodie or Coat"
    },{
        type: "Drizzle",
        emoji: "🌦️",
        recommendation: "Jacket, Coat and maybe Umbrella"
    },{
        type: "Rain",
        emoji: "🌧️",
        recommendation: "Anorak or Parka, and Umbrella"
    },{
        type: "Storm",
        emoji: "⛈️",
        recommendation: "Don't go out wearing Full Plate Mail or wave conductive metal at the sky"
    },{
        type: "Heavy Winds",
        emoji: "🌬️",
        recommendation: "Watch out for flying debris"
    },{
        type: "Tsunami",
        emoji: "🌊",
        recommendation: "Ah kid, get the hell outta there!"
    },
]

module.exports = WEATHER_TYPES;