import React, { useEffect, useState } from 'react';
import TitleBar from './components/TitleBar';
import Map from './components/Map';
import WeatherContainer from './components/WeatherContainer';
import './styles/App.css';
import axios from 'axios';
import { Box } from '@mui/material';

/**
 * This is the wrapping container of the App.
 * @returns JSX Element
 */
function App() {
  // Weather State for the App.
  const [weather, setWeather] = useState(undefined);

  /**
   * Fetch Weather By Location ID
   * @param {*} event The HTML onClick Event
   * @returns void. But triggers a state update for weather and thus a rerender when successful.
   */
  const fetchWeatherByLocation = async (event) => {
    // Extract the id of the element using the function
    const { id } = event.target;
    // Retrieve Data from API
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/weather/${id}`);
    // If no Data, stop.
    if(!data) {
      console.log("Failed. Please check the API.");
      return;
    } 
    // Update our state and scroll to the bottom of the screen.
    setWeather(data);
    document.getElementById("bottom").scrollIntoView();
  }

  /**
   * ⭐⭐⭐: Something can use this instead to fix an infrequent bug.
   */
  useEffect(() => {

  }, [])

  return (
    <Box className="App" sx={{ backgroundColor: 'primary' }}>
      <TitleBar />
      <Map weatherFetch={fetchWeatherByLocation} />
      <WeatherContainer weather={weather} />
    </Box>
  );
}

export default App;
