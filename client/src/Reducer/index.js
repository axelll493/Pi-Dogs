const inicialstate = {
    dogs: [],
    temperament: []
}

function RootReducer (state= inicialstate, action){
    switch(action.type) {
        case 'GET_DOGS':
            return {
                ...state,
                dogs: action.payload
            }
        case 'GET_NAME_DOG':
            return {
                ...state,
                dogs: action.payload
            }
        case 'FILTER_BY_TEMPERAMENTS':
            const alldogs = state.dogs
            const statusFiltered = action.payload === 'All' ? alldogs : alldogs.filter(e => e.temperament === action.payload)
            return {
                ...state,
                dogs: statusFiltered 

            }
        case 'POST_DOG': {
            return{
                ...state
            }
        }
        default:
            return state
    }
}

export default RootReducer