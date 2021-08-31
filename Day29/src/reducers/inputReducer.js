const inputPlaceReducer = (state = "", action) => {
    if(action.type === "INPUT_PLACE"){
        console.log(action.payload);
        return action.payload
    }
    return state;
}

export default inputPlaceReducer;