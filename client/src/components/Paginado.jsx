import React from "react";
import '../styles/Paginado.css'

export default function Paginado({dogsPerpage, allDogs, paginado}) {
    const pageNumbers = []

    for(let i=0; i<Math.ceil(allDogs/dogsPerpage);i++){
        pageNumbers.push(i+1)
    }

    return(
        <nav>
           <ul className="paginado">
               {
                   pageNumbers &&
                   pageNumbers.map(number=>(
                       <li className="number" key={number}>
                           <button onClick={()=> paginado(number)}><strong>{number}</strong></button>
                       </li>
                   ))
               }
           </ul>
        </nav>
    )
}