import { Typography } from "@mui/material";
import React from "react";
import MapMarker from "./MapMarker";

// ⭐: Multiple Bugs contained within

/**
 * This is a Map with multiple interactive location markers.
 * @returns JSX Element
 */
const Map = ({weatherFetch}) => {

    const UK_LOCATIONS = [
        {
            name: "England",
            positionFromTop:"65%",
            positionFromLeft:"63%"
        },{
            name: "Scotland",
            positionFromTop:"30%",
            positionFromLeft:"48%"
        },{
            name: "Wales",
            positionFromTop:"67%",
            positionFromLeft:"50%"
        },{
            name: "Ireland",
            positionFromTop:"20%",
            positionFromLeft:"35%"
        },{
            name: "Cornwall",
            positionFromTop:"82%",
            positionFromLeft:"48%"
        },
    ]

    return (
        <div style={{ position: "relative", padding: "1rem" }}>
            {UK_LOCATIONS.map((location, i) => (
                <React.Fragment key={i}>
                    <MapMarker name={location.name}
                        positionFromTop={location.positionFromTop}
                        positionFromLeft={location.positionFromLeft}
                        onClickHandler={weatherFetch}
                    />
                </React.Fragment>
            ))}
            <Typography>Please a location.</Typography>
            <img src="https://media.istockphoto.com/vectors/united-kingdom-uk-of-great-britain-and-northern-ireland-map-divided-vector-id928591430?k=20&m=928591430&s=612x612&w=0&h=snUp8qXit9aIUCXyQY0ZuX5QBA1sQZBsuUa7iO_lzGg="
                style={{
                    height: "82vh",
                    borderRadius: "5px",
                    border: "black 0.2rem solid",
                    boxShadow: "3px 3px 10px 0px"
                }}
            />
        </div>
    )
}

export default Map;