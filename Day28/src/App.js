import './App.css';
import { useState } from 'react';

function App() {
  const [place,setPlace] = useState("");
  const [placeData, setPlaceData] = useState({})
  const placeWeather = () => {
    fetch("https://api.weatherapi.com/v1/current.json?key=0992870c262c4f55a51161444212008&q=" + place)
    .then(res => res.json())
    .then((data) => {
      setPlaceData(data)
    })
  }
  return (
    <div className="container">
    <div className="row">
      <div className="col-12 form">
        <input type="text" value={place} 
          onChange={(e) =>{
            setPlace(e.target.value);
          }}
        />
        <button className="btn btn-primary" onClick={placeWeather}>submit</button>
      </div>
      <div className="offset-md-4 col-12 col-md-4 weather">
        <div className="card">
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
    </div>
    </div>
  );
}

export default App;
