const inicialstate = {
    dogs: []
}

function RootReducer (state= inicialstate, action){
    switch(action.type) {
        case 'GET_DOGS':
            return {
                ...state,
                dogs: action.payload
            }
        default:
            return state
    }
}

export default RootReducer