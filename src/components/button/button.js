import React from 'react';
import './button.css';
  

const Button = (props) => {
    return (
        <div className="button">
            <button className="btn btn-lg btn-primary mr-4" onClick={props.start}>Start</button>
            <button className="btn btn-lg btn-secondary  mr-4" onClick={props.reset} >Reset</button>
            <button className="btn btn-lg btn-danger  mr-4" onClick={props.stop}>Stop</button>
        </div>
    );
}
 
export default Button;