const themeReducer = (state = false, action) => {
    if(action.type === "TOGGLE_THEME"){
        state = !action.payload
    }
    return state;
}

export default themeReducer;