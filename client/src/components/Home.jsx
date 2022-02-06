import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import { getDogs} from "../actions";
import Paginado from "./Paginado";
import Card from './Card'
import '../styles/Home.css'
import NavBar from "./NavBar";


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

    const handleClick =(e)=>{
        e.preventDefault()
        dispatch(getDogs())
    }
 
    return (
        <div className={"Conteinerr"}>
            <NavBar
            />
            <div className={"Btn.Containe"}>
                <button className="Button home"  onClick={handleClick}>
                        <strong>Reset Dogs</strong>
                </button>
                <button className="Button home">
                    <strong><Link className = "Link" to= '/dogs'>Create Dogs</Link></strong>
                </button>
            </div>
            
            <ul className="DogsGrid">
                
                {
                        currentDogs?.map((el) => {
                        return (
                            <div key={el.id} className='cardHome'>
                                <Link to={'/home/' + el.id} style={{ textDecoration: 'none' }} >
                                    <Card
                                        name={el.name}
                                        image={el.image}
                                        temperament={el.temperament}
                                        weightMin={el.weightMin}
                                        weightMax={el.weightMax}
                                        key={el.id}
                                    />
                                </Link>
                            </div>
                        )
                    })
                }
            </ul>
            <Paginado dogsPerpage={dogsPerPage} allDogs={allDogs.length} paginado={paginado}/>
        </div>
    )
}