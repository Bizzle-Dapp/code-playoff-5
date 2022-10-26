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
        {weather.week.map((week, i) => (
            <Card key={i}
            sx={{
                minHeight: "20vh",
                maxWidth: "30vw",
                marginTop: "0.5rem",
            }}>
                <Typography><b>{week.day.toUpperCase()}</b></Typography>
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