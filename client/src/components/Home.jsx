import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import { getDogs } from "../actions";
import Card from "./Card";
import Paginado from "./Paginado";

export default function Home () {
    const dispatch = useDispatch()
    const allDogs = useSelector ((state)=> state.dogs)
    
    //Paginado
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage, /*setdogsPerPage*/] = useState(8)
    const indexOfLastDog = currentPage *dogsPerPage;
    const indexOfFirstDog = indexOfLastDog -dogsPerPage;
    const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog)

    const paginado= (pageNumber)=> {
        setCurrentPage(pageNumber)
    }
    ///...................................................................
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
                    <option>Name of breeds</option>
                    <option>A - Z</option>
                    <option>Z - A</option>
                </select>
            </div>
            <div>
                <select>
                    <option>Weith</option>
                    <option>light weight - heavy weight</option>
                    <option>heavy weight - light weight</option>
                </select>
            </div>
            <div>
                <select>
                    <option>All temperaments</option>
                </select>
            </div>
            <div>
                <select>
                    <option>All breeds</option>
                    <option>Existent</option>
                    <option>Created</option>
                </select>
                <Paginado dogsPerpage={dogsPerPage} allDogs={allDogs.length} paginado={paginado}/>
            {
                currentDogs?.map((e)=> {
                    return(
                        <div key={e.id}>
                            <Link to={'/home/' + e.id}>
                                  <Card 
                                       name={e.name}
                                       image={e.image}
                                       temperament={e.temperament}
                                       weightMin={e.weightMin}
                                       weightMax={e.weightMax}
                                       key={e.id}
                                  />
                            </Link>
                        </div>
                    )
                })
                
            }
            </div>
        </div>
    )
}