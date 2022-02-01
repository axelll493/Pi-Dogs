import React, {useState} from "react"
import { useDispatch } from "react-redux"
import { getNameDogs } from "../actions"


export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    
    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(getNameDogs(name))
        setName("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
               <input
                      placeholder="Buscar..."
                      type="text"
                      value={name}
                      onChange={(e)=>handleInputChange(e)}
                />
                <button type='submit'>Buscar</button>  
            </form>
        </div>
    )
}