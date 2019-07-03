import React from 'react';

function Input(props) {
    return (
        <div className="form-group">
            Number of videos : <input
                type="number"
                className="form-control"
                value={props.max}
                onChange={props.change} />
        </div>
    )
}

export default Input;