const fetchDataReducer = (state = [] , action : any) => {
    if(action.type === "FETCH_DATA"){
        state = action.payload;
    }
    return state;
}

export { fetchDataReducer };