import React from 'react';
import './stylesheet.css'

const MiniWeatherCard = (props) => {

    return (
        <div className="miniCard">
            <h3>{props.day}</h3>
            <div className="mainData">
                <i className={`icon huge sun`}/>
                <p className="celsius">{props.celsius}°C</p>
            </div>
            
            <div className="info">
                <p>{props.weatherDescription}</p>
            </div>
        </div>
    )
    
};

export default MiniWeatherCard;