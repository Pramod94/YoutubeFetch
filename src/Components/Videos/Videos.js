import React from 'react';

function Video(props){
    return(
        <div>
            {props.data.map(res => {
                return (
                    <iframe
                    width="560" height="315" src={res} frameBorder="50" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                    </iframe>
                )
            })} 
            </div>
    )
}

export default Video;