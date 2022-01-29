import React from "react";

export default function Paginado({dogsPerpage, allDogs, paginado}) {
    const pageNumbers = []

    for(let i=0; i<Math.ceil(allDogs/dogsPerpage);i++){
        pageNumbers.push(i+1)
    }

    return(
        <nav>
           
        </nav>
    )
}