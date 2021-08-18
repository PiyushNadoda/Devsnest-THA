const todoReduce= (state = [], action) => {
    if(action.type === "ADD_TODO"){
        state = [...state,action.payload]
    } else if ( action.type === "REMOVE_TODO" ){
        state = state.filter((item, index) => index !== action.payload)
    }
    return state;
}

export default todoReduce;