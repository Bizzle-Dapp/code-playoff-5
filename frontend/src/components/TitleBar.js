import React from "react";
import { Box, Typography } from "@mui/material";

// ⭐ or ⭐⭐: Bug contained within.

/**
 * This is the title bar of the app.
 * @returns JSX Element
 */
const TitleBar = () => {
    return (
        <Box
            sx={{
                width: "100vw",
                height: "10vh",
                backgroundColor: 'primary.dark',
                borderBottom: 'black 0.2rem solid',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "ghostwhite",
                textShadow: "#8ec641 2px 1px 1px"
            }}
        >
            <Typography variant="h2">UK Weather</Typography>
        </Box>
    )
}

export default TitleBar;