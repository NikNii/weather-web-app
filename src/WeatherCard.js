import React from 'react';
import './stylesheet.css'

const WeatherCard = (props) => {

    return (
        <div className="card">
            <div className="location">
                <h1 className="city">{props.city}</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et ullamcorper nulla. Fusce ultrices tincidunt venenatis. Nam tristique tempor leo id viverra. Fusce dui orci, tincidunt a tortor id, dignissim vulputate lectus. Donec diam ipsum, dapibus ac scelerisque eget, posuere a dolor. Donec elementum turpis nec sagittis suscipit. Nam suscipit arcu quis massa faucibus euismod. Fusce porttitor, velit faucibus elementum suscipit, magna orci ultricies mi, sed faucibus enim lectus ut ipsum. Vivamus consectetur, turpis sed egestas vehicula, nisi tortor imperdiet ante, non sollicitudin odio tortor vel nulla. Cras blandit varius tortor id tincidunt. Duis ullamcorper tortor ut ante ultricies, sed luctus metus consequat. In dictum dolor odio, vel tincidunt urna accumsan vitae. Praesent ut tortor arcu.
                </span>
            </div>
            <div className={`temperature`}>
                <i className={`icon massive snowflake weatherIcon`}  />
                <div className="currentWeather">
                    <h2 className="today">{props.today}</h2>
                    <p className="celsius">{props.celsius}°C</p>
                    <p className="weatherDescription">{props.weatherDescription}</p>
                    <div className="extraDesc">
                        <p className="humidity">Humidity: {props.humidity}%</p
                        ><p className="wind">Wind: {props.wind} m/s</p>
                    </div>
                    
                </div>
                
            </div>
            <div className={`info`}>

            </div>
        </div>
    )
    
};

WeatherCard.defaultProps = {
    city: 'Suomi',
    celsius: '10',
    humidity: '50',
    wind: '5',
    weatherDescription: 'Nice and chilly',
    today: 'Anyday'
}

export default WeatherCard;