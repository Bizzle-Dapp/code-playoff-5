import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

// ⭐⭐: Bug contained within.

/**
 * This is the component provides the weather view for the day.
 * @param weather An object denoting different information about the weather for a location
 * @returns JSX Element
 */
const WeatherDay = ({ weather }) => {

    return (
        <>
            {weather.day.map((day, i) => (
                <Card key={i} sx={{
                    minHeight: "20vh",
                    maxWidth: "30vw",
                    marginTop: "0.5rem",
                }}>
                    <Typography><b>{day.time.toUpperCase()}</b></Typography>
                    <CardContent>
                        <Typography><b>Weather:</b> {day.weather.type}</Typography>
                        <Typography variant="h4">{day.weather.emoji}</Typography>
                        <Typography><b>We Recommend:</b> {day.weather.recommendation}</Typography>
                    </CardContent>
                </Card>
            ))}
        </>
    )
}

export default WeatherDay;