import React from "react";
import styles from '../styles/Paginado.module.css'

export default function Paginado({dogsPerpage, allDogs, paginado}) {
    const pageNumbers = []

    for(let i=0; i<Math.ceil(allDogs/dogsPerpage);i++){
        pageNumbers.push(i+1)
    }

    return(
        <nav>
           <ul className={styles.paginado}>
               {
                   pageNumbers &&
                   pageNumbers.map(number=>(
                       <li className={styles.number} key={number}>
                           <button className={styles.button} onClick={()=> paginado(number)}>{number}</button>
                       </li>
                   ))
               }
           </ul>
        </nav>
    )
}