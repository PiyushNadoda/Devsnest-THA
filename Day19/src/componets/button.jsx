import React from "react";

class Button extends React.Component{
    x = 0;

    increase = (event) => {
        this.x++;
        event.target.value = this.x;
    }
    render(){
    return(  <>
                <input className="btn" type="button" onClick={this.increase} value={this.x} />  
        </>
    )}
}

export default Button;