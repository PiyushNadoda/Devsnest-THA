import { useSelector} from "react-redux";

const Card = () => {
  const theme = useSelector(state => state.theme);
  const placeData = useSelector(state => state.data)
    return(<>
     <div className="offset-md-4 col-12 col-md-4 weather">
        <div className={theme ? "card dark" : "card"}>
          { placeData.location ? (<>
          <img src={placeData.current.condition.icon} alt=""/>
          <div className="card-temp">{placeData.current.temp_c}&deg;</div>
          <div className="card-condition">{placeData.current.condition.text}</div>
          <div className="card-place">{placeData.location.name}</div>
          <div className="container card-bottom">
            <div className="row">
              <div className="col">wind speed
                <div className="card-data">{placeData.current.wind_kph} <span className="card-unit">km</span> </div>
              </div>
              <div className="col">Humidity
              <div className="card-data">{placeData.current.humidity}<span className="card-unit">%</span> </div>
              </div>
              <div className="col">Precipitation
              <div className="card-data">{placeData.current.precip_in}<span className="card-unit">%</span> </div>
              </div>
            </div>
          </div>
          </>) : (
            <div className="place-not-found">Place not found</div>
          )}
        </div>
      </div>
    </>)
}

export default Card;