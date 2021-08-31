import {useSelector, useDispatch} from 'react-redux';
import {toggleTheme} from '../actions/index'

const ToggleTheme = () => {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();
    return(
        <button className={theme ?"btn btn-light theme" : "btn btn-dark theme" } onClick={() => dispatch(toggleTheme(theme))}> theme </button>
    )
}

export default ToggleTheme;