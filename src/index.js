// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import WeatherCard from './WeatherCard';
import MiniWeatherCard from './MiniWeatherCard';

// Create a react component
const App = () => {
    const weatherInfo = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    return (
        <div className="container">
            <div className="toolbar">
                <p>Weather</p>
            </div>
            <div className="content">
                <WeatherCard celsius="25" weatherDescription ="Sunny" city="Turku"/>
                <div className="miniCards">
                {weatherInfo.map(i => {
                    return <MiniWeatherCard day ={i} weatherDescription ="Sunny" celsius="25"/>
                })}
                    
                </div>
            </div>
        </div>
    )
    
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));