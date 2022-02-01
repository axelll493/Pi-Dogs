import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/LandingPage.module.css'

export default function LandingPage() {
    return (
  
        <div className={styles.Container}>
            <div className={styles.TextContainer}>
                <h1 className={styles.Title}>Welcome animal expert page</h1>
                <h3 className={styles.text}>Would you like to know more about your pet?</h3>
            <Link to = '/home/'>
                 <button className={styles.button}>Let's go!</button>
            </Link>
            </div>
        </div>
    )
}