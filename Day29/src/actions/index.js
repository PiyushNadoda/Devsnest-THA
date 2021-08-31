const inputPlace = (place) => {
    return{
        type: "INPUT_PLACE",
        payload: place,
    }
}

const getPlaceData = (place) => {
    return (dispatch) => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=0992870c262c4f55a51161444212008&q=${place}`)
    .then(res => res.json())
    .then((data) => {
      dispatch({
          type : "UPDATE_PLACE_DATA",
          payload: data
      })
    })
}}
const toggleTheme = (theme) => {
    return{
        type : "TOGGLE_THEME",
        payload: theme,
    }
}

export {inputPlace, getPlaceData, toggleTheme};