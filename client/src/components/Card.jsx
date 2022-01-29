import React from "react";

export default function Card({name, image, temperament, weightMin, weightMax}){
    return(
        <div>
            <h1>{name}</h1>
            <h2>{temperament}</h2>
            <img src={image} alt="img not found" width="250px" height="250px"/>
            <h3>Weight: {weightMin} - {weightMax} Kg</h3>
        </div>
    )
} 