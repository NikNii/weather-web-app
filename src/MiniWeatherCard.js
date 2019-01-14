import React from 'react';
import './stylesheet.css'

const themeConfig = {
    Clear: {
        iconName: 'sun'
    },
    Clouds: {
        iconName: 'cloud'
    },
    Rain: {
        iconName: 'umbrella'
    },
    Snow: {
        iconName: 'snowflake'
    },
    
};

const MiniWeatherCard = (props) => {
    const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const dayIndex = props.day;
    const overallWeather = props.overallWeather;
    // const {iconName} = themeConfig[overallWeather] 

    return (
        <div className="miniCard">
            <h3>{week[dayIndex]}</h3>
            <div className="mainData">
                <i className={`icon huge snowflake`}/>
                <p className="celsius">{props.celsius}°C</p>
            </div>
            
            <div className="info">
                <p>{props.weatherDescription}</p>
            </div>
        </div>
    )
    
};

export default MiniWeatherCard;