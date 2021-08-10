import "./App.css";
import React, {useState} from 'react'


function App() {
 const [detail, setDetail] = useState([
    {food: "Chocolate milk",
    cal: "208"},
    {food: "Low fat (2%) milk",
    cal: "121"},
    {food: "Pudding (any flavor)",
    cal: "161"},
    {food: "Skim milk",
    cal: "86"}
 ])

 function Card({calory, food, index}){

  function remove(event){
    let newDet = detail.filter((item, i)=> i !== index)
    setDetail(newDet);
  }
 return(  <div className="container">
      <div className="card">
          <h1>{food || 'none' }</h1>
          <p>you have consumed {calory || '0'} cals today</p>
          <div className="button-container"> <button onClick={remove}>delete</button> </div>
      </div>
  </div>)
}


  return (
    <div className="App">
    {
      detail.map((item, index) => {
        return <Card food={item.food} calory={item.cal} key={index} index={index} />
      })
    }
    </div>
  );
}

export default App;
