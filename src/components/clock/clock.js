import React from 'react';
import './clock.css';

const Clock = (props) => {
    return (
        <div className="clock">
            {props.time.hour}:{props.time.minute}:{props.time.second}
        </div>
    );
}
 
export default Clock;