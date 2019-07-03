import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Button(props){
    return(
        <div>
            <button className="btn-primary" onClick={props.get}>Get Youtube Videos</button>
        </div>
    );
}

export default Button;