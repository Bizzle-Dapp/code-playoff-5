import { Box, Tooltip } from "@mui/material";
import React from "react";

/**
 * This is a generic map marker component.
 * @param name Used for toolip and identification
 * @param positionFromTop The position percentage from the top of the relative wrapping element
 * @param positionFromLeft The position percentage from the left of the relative wrapping element
 * @param onClickHandler The function to call when this map marker is clicked
 * @returns JSX Element
 */
const MapMarker = ({
    name,
    positionFromTop,
    positionFromLeft,
    onClickHandler
}) => {
    return (
        <Tooltip title={name}>
            <Box
                id={name}
                tabIndex={0}
                sx={{
                    position: "absolute",
                    width: "1rem",
                    height: "1rem",
                    backgroundColor: "#343478",
                    borderRadius: "15px",
                    top: positionFromTop,
                    left: positionFromLeft,
                    cursor: "pointer",
                    ':hover': {
                        backgroundColor: "white",
                        border: "1px black solid",
                        borderRadius: "5px",
                        transform: "scale(1.05, 1.05)"
                    },
                    ':focus-visible': {
                        backgroundColor: "white",
                        border: "1px black solid",
                        borderRadius: "5px",
                        transform: "scale(1.05, 1.05)"
                    }
                }}
                onClick={onClickHandler} />
        </Tooltip>
    )
}

export default MapMarker;