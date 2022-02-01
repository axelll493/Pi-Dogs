import React from "react";
import SearchBar from "./SearchBar";
import styles from '../styles/NavBar.module.css'

export default function NavBar() {
    
    return(
        <div className={styles.NavBar}>
            <div className={styles.Container}>
                <h1 className={styles.tittle}>Dogs</h1>
            <SearchBar/>
            <div className={styles.FilterContainer}>
                <select className={styles.Filter}>
                    <option>light weight - heavy weight</option>
                    <option>heavy weight - light weight</option> 
                </select>
                <select className={styles.Filter}>
                    <option value= 'select'>Name of breeds</option>
                    <option>A - Z</option>
                    <option>Z - A</option>
                </select>
                <select className={styles.Filter}>
                    <option>All breeds</option>
                    <option>Existent</option>
                    <option>Created</option>
                    
                </select>
                <select className={styles.Filter}>
                    <option>All temperaments</option>
                    <option></option>
                </select>
            </div>
            </div>
        </div>
    )
}