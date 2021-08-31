import {useSlector, useDispatch} from 'react-redux';
import {toggleTheme} from '../actions/index'

const ToggleTheme = () => {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();
    return(
        <button className={theme ? "btn btn-dark" :"btn btn-light"} onClick={() => dispatch(toggleTheme)}> theme </button>
    )
}

export default ToggleTheme;