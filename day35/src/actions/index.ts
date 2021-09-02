const fetchProfiles = () => {
    return (dispatch : any) => {
          fetch('./DATA/user.json')
         .then(res => res.json())
         .then(data => {
            dispatch({
                type : "FETCH_DATA",
                payload: data
            })
        });
    }
    }

export { fetchProfiles };