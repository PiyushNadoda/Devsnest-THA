import { useDispatch, useSelector } from 'react-redux';
import { inputPlace, getPlaceData } from '../actions/index';

const Input = () => {
    const place = useSelector(state => state.place)
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch()
    return (
    <>
      <div className="col-12 form">
        <input
          type="text"
          value={place}
          onChange={(e) => {
            dispatch(inputPlace(e.target.value))
          }}
        />
        <button className={theme ? "btn btn-light" : "btn btn-dark"}
            onClick={() => {
              dispatch(getPlaceData(place))
            }}
        >
          submit
        </button>
      </div>
    </>
  );
};

export default Input;
