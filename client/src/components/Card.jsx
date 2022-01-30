import React from "react";
import styles from '../css/Card.module.css'

export default function Card({name, image, temperament, weightMin, weightMax}){
    return(
        <li className={styles.DogsCard}>
            <div>{name}</div>
            <div>{temperament}</div>
            <img className={styles.DogsImage} src={image} alt="img not found" width="250px" height="250px"/>
            <div>Weight: {weightMin} - {weightMax} Kg</div>
        </li>
    )
} 