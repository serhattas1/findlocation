import React  from "react";

const LocationDisplay=({latitude})=>{
    console.log(latitude);

    const location=latitude >0 ? 'Northern' :'Southern';
    return(
        <div>
            {location}
        </div>
    )
}
//Add comment for publish github
export default LocationDisplay;