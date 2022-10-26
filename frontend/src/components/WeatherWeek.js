import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

// ⭐: Multiple Bugs contained within.

/**
 * This is the component provides the weather view for the week.
 * @param weather An object denoting different information about the weather for a location
 * @returns JSX Element
 */
const WeatherWeek = ({weather}) => {

    return(
        <>
        {weather.week.map((week) => (
            <Card sx={{
                minHeight: "20vh",
                maxWidth: "30vw",
                marginTop: "-3rem",
            }}>
                <Typography><b>{week.weather.type.toUpperCase()}</b></Typography>
                <CardContent>
                    <Typography><b>Weather:</b> {week.weather.type}</Typography>
                    <Typography variant="h4">{week.weather.emoji}</Typography>
                    <Typography><b>We Recommend:</b> {week.weather.recommendation}</Typography>
                </CardContent>
            </Card>
        ))}
        </>
    )
}

export default WeatherWeek;