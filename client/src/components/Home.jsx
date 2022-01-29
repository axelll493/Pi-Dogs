import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import { getDogs } from "../actions";

export default function Home () {
    const dispatch = useDispatch()
    const allDogs = useSelector ((state)=> state.dogs)

    useEffect(()=>{
        dispatch(getDogs())
    },[dispatch])

    function handleClick(e){
        e.preventDefault()
        dispatch(getDogs())
    }
    return (
        <div>
            <Link to= '/dogs'>Crear Perros</Link>
            <h1>DOGS</h1>
            <button onClick={e => {handleClick(e)}}>
                volver a cargar todos los perros
            </button>
            <div>
                <select>
                    <option></option>
                </select>
            </div>
        </div>
    )
}