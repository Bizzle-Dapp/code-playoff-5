# Code-Playoff-5 : Bug Hunt

### About this repo
This repo is used for a small code-playoff in our discord channel.

The repo is meant to replicate a small project in which there are a few problems of varying severity.

### Get Started:

#### FRONTEND:
Run `npm i` from the frontend directory. This will install all required packages.

You can then start the application with `npm run start`

#### API:
Run `npm i` from the api directory. This will install all required packages.

You can then start the application with `npm run start`

### Total rewards:
There are roughly 12 Stars to obtain in total throughout the application.

### The Application Should:
- Show a map of the UK with regional map markers.
- Each marker will reveal an option for weather by Day or Week.
- Day will display Dawn, Morning, Afternoon, Evening and Night.
- Week will display the weather for each day of the week.
- The window will scroll to the view once a location is selected.
- The theme colours are: Gentle Blue #1565c0, Subtle Green #8ec641, with Black outlining.

## Now it's over:

Rewards were:

⭐⭐⭐: App.js:  useEffect ScrollIntoView

⭐/ ⭐⭐: TitleBar.js:  `backgroundColor: 'primary.dark',` 

⭐⭐: WeatherDay.js: day.map() does not return JSX
⭐⭐: WeatherContainer.js: incorrect class on button span
⭐⭐: Map.js: image missing alt prop: `alt="Map of the UK"`

⭐: Map.js: Ireland positionFromTop ~46%
⭐: Map.js: Typography grammer "Please select a location."


⭐: WeatherWeek.js: key={i} missing from card.
⭐: WeatherWeek.js: marginTop: "0.5rem",
⭐: WeatherWeek.js: {week.day.toUpperCase()}
