import React from "react";
import styles from '../styles/Card.module.css'

export default function Card({name, image, temperament, weightMin, weightMax}){
    return(
        <li className={styles.DogsCard}>
            <img className={styles.DogsImage} src={image} alt="img not found" width="230px" height="345px"/>
            <div>{name}</div>
            <div style={styles.weight}>Weight: {weightMin} - {weightMax} Kg</div>
            <div>Temperament:</div>
            <div>{temperament}</div>
        </li>
    )
} 