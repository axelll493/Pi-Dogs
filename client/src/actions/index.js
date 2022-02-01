import axios from 'axios'

export function getDogs() {
    return async function(dispatch){
        try{
            var json = await axios.get("http://localhost:3001/dogs",)
            return dispatch ({
            type: "GET_DOGS",
            payload: json.data
            })
        }catch (error) {
            console.log(error)
        }
    }
}

export function getNameDogs(name) {
    return async function (dispatch){
        try {
            var json = await axios("http://localhost:3001/dogs?name="+name)
            return dispatch({
                type: "GET_NAME_DOG",
                payload: json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}

export function getTemperaments () {
    return async function (dispatch){
        try{
            var json = await axios("http://localhost:3001/temperament",{})
            return dispatch({type: "GET_TEMPERAMENTS", payload:json.data})
        }catch(error){
            console.log(error)
        }
    }
}

export function PostDogs(payload){
    return async function(dispatch){
        try{
            const data = await axios.post("http://localhost:3001/dogs",{})
            return data
        }catch(error){
            console.log(error)
        }
    }
}
export function filterByTemperaments(payload){
    return{
        tipe: 'FILTER_BY_TEMPERAMENTS',
        payload
    }
}

