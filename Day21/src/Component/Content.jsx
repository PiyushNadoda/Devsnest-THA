import { useState } from "react";


function Content(){

    const [item,setItem] = useState([]);
    var food,calory;
    var changeItemIndex;

    // getting value of food input
    function foodValue(event){
       food = event.target.value;
    }
    // getting value of calory input
    function caloryValue(event){
        calory = event.target.value;
    }

    // pushing item into item array
    function addItem(event){
        if(document.querySelector('.input-food').value !== "" && document.querySelector('.input-calory').value !== ""){
        event.preventDefault();
        document.querySelector('.input-food').value="";
        document.querySelector('.input-calory').value="";
        var newItem = {food: food, calory: calory};
        setItem([...item, newItem]);};
    }

    // for changing the value of item
    function changeItem(event){
        food = document.querySelector('.input-food').value;
        calory = document.querySelector('.input-calory').value;
        if(document.querySelector('.input-food').value !== "" && document.querySelector('.input-calory').value !== ""){
        let itemSetter = [...item];
        itemSetter[changeItemIndex].food = food;
        itemSetter[changeItemIndex].calory = calory;
        document.querySelector('.input-food').value="";
        document.querySelector('.input-calory').value="";
        document.querySelector('.add-item').style.display = "block";
        document.querySelector('.change-item').style.display = "none";
        setItem(itemSetter);
        event.preventDefault();
    }
    }

    // item card
    function Detail({food, calory, index}){

        // deleting item
        function deleteItem(){
            let itemSetter = item.filter((item, i) => i !== index);
            setItem(itemSetter);
        }

        // triggering edit item to get change item button
        function editItem(){
            changeItemIndex = index;
            food = item[changeItemIndex].food;
            calory = item[changeItemIndex].calory;
            document.querySelector('.add-item').style.display = "none";
            document.querySelector('.change-item').style.display = "block";
            document.querySelector('.input-food').value = food;
            document.querySelector('.input-calory').value = calory;

        }

        return(
            <div className="detail">
                        <h1>{food}</h1>
                        <p>you have consumed {calory} cal.</p>
                        <div className="button-container">
                        <button className="edit" onClick={editItem}>Edit</button>
                        <button className="delete" onClick={deleteItem}>Delete</button>
                        </div>
                    </div>
        )
    }

    return(
        <div className="main-container">
            <form>
                <div className="input-container">
                <input className="input-food" type="text" onChange={foodValue} placeholder="food"  required/>
                <input className="input-calory" type="number" onChange={caloryValue} placeholder="calory" required/>
                </div>
                <button onClick={addItem} className="add-item"> Add item </button>
                <button onClick={changeItem} className="change-item"> Save </button>
            </form>
            <h1 className="heading"> List </h1>
            <div className="list-container">
            {
                item.map((i, index) => {
                   return( <Detail food={i.food} calory={i.calory} key={index} index={index}/>)
                })
            }
            </div>
        </div>
    )
}
export default Content;