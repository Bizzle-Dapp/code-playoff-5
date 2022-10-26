import React, { useState } from "react";
import '../styles/WeatherButton.css';
import { Box, Typography, Button } from "@mui/material";

import WeatherDay from "./WeatherDay";
import WeatherWeek from "./WeatherWeek";

// ⭐⭐: Bug contained within.

/**
 * An enum of views available
 */
const VIEW_TYPE = [
    'DAY',
    'WEEK'
]

/**
 * This is the component that wraps different weather views and provides the ability to switch between views.
 * @param weather An object denoting different information about the weather for a location
 * @returns JSX Element
 */
const WeatherContainer = ({
    weather
}) => {
    // View type state
    const [viewType, setViewType] = useState(VIEW_TYPE[0])

    return (
        <>
            {weather?.location && (
            <>
                <Box
                    sx={{
                        width: "100vw",
                        backgroundColor: 'primary.dark',
                        borderTop: 'black 0.2rem solid',
                        borderBottom: 'black 0.2rem solid',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "ghostwhite",
                        textShadow: "#8ec641 2px 1px 1px"
                    }}
                >
                    <Typography variant="h4">{weather?.location ? `The Weather for ${weather?.location}` : "Please Select a Location"}</Typography>
                </Box>
                <>
                    <div style={{
                        display: "flex",
                        width: "100vw",
                        justifyContent: "space-around",
                        margin: "0.5rem"
                    }}
                        >
                        <span className={viewType === VIEW_TYPE[0] ? "Button" : ''}>
                            <Button variant="contained"
                                onClick={() => {
                                    setViewType(VIEW_TYPE[0])
                                }}>Today's Weather</Button>
                        </span>
                        <span className={viewType === VIEW_TYPE[1] ? "Button" : ''}>
                            <Button variant="contained"
                                onClick={() => {
                                    setViewType(VIEW_TYPE[1])
                                }}>This Weeks Weather</Button>
                        </span>
                    </div>
                    <div style={{
                        display: "flex",
                        width: "100vw",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                        alignItems: "center",
                    }}>
                        {viewType === "DAY" && (
                            <WeatherDay weather={weather} />
                        )}
                        {viewType === "WEEK" && (
                            <WeatherWeek weather={weather} />
                        )}
                    </div>
                </>
            </>)}
            <div id="bottom"/>
        </>
    )
}

export default WeatherContainer;