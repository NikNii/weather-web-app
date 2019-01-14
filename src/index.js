// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import WeatherCard from './WeatherCard';
import MiniWeatherCard from './MiniWeatherCard';
import Loading from './Loading';

class App extends React.Component{
    state = {
        week: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        today: new Date().getDay(),
        time: new Date().toLocaleTimeString(),
        celsius: null,
        weatherDesc: null,
        humidity: null,
        wind: null,
        city: null,
        forecast: {},
        dayOne: {},
        dayTwo: {},
        dayThree: {},
        dayFour: {},
        weatcherCheck: true,
        lat: null, lng: null,
        errorMessage: ''
};
    
    componentDidMount(){
           this.getCoords();
    }
    async getCoords(){
        await window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, 
                                        lng: position.coords.longitude}),
            error =>    this.setState({ errorMessage:error.message })
        );
    }
    async getWeather(lat, lng){
        if(this.state.weatcherCheck){
            const response = await axios.get('http://api.openweathermap.org/data/2.5/forecast', {
                        params: {   lat: lat,
                                    lon: lng,
                                    units: 'metric',
                                    appid: 'bd792b4f514e82a2468853df8a863379'}
                        });
            console.log(response)
            this.setState({ celsius: response.data.list[0].main.temp, 
                            city: response.data.city.name,
                            weatherDesc: response.data.list[0].weather[0].description,
                            overallWeather: response.data.list[0].weather[0].main,
                            humidity: response.data.list[0].main.humidity,
                            wind: response.data.list[0].wind.speed,
                            weatcherCheck: false,
                            forecast:response.data.list,
                            dayOne: {   celsius: response.data.list[7].main.temp, 
                                        weatherDesc: response.data.list[7].weather[0].description,
                                        overallWeather: response.data.list[7].weather[0].main
                                    },
                            dayTwo: {   celsius: response.data.list[15].main.temp, 
                                        weatherDesc: response.data.list[15].weather[0].description,
                                        overallWeather: response.data.list[15].weather[0].main
                            },
                            dayThree: { celsius: response.data.list[23].main.temp, 
                                        weatherDesc: response.data.list[23].weather[0].description,
                                        overallWeather: response.data.list[23].weather[0].main
                            },
                            dayFour: {  celsius: response.data.list[31].main.temp, 
                                        weatherDesc: response.data.list[31].weather[0].description,
                                        overallWeather: response.data.list[31].weather[0].main
                            },
            });
        }
    }
    renderContent(){

        // Checks whether there's an error
        if(this.state.errorMessage && !this.state.lat && !this.state.lng){
            return <div>
                <Loading message={this.state.errorMessage}/>
            </div>
        }
        // Checks if the location has been received
        if(!this.state.errorMessage && this.state.lat && this.state.lng){
            this.getWeather(this.state.lat, this.state.lng);
            return (
                <div className="container">
                <div className="toolbar">
                    <p>Weather</p>
                </div>
                <div className="content">
                    {/*<WeatherCard/>*/}
                    <WeatherCard 
                        city={this.state.city} 
                        celsius={this.state.celsius} 
                        humidity={this.state.humidity} 
                        wind={this.state.wind} 
                        weatherDescription={this.state.weatherDesc} 
                        today={this.state.week[new Date().getDay()]}
                        />
                    {/*<WeatherCard celsius={this.state.weather.data.main.temp} weatherDescription ={this.state.weather.data.weather["0"].description} city={this.state.weather.data.name}/> */}
                    <div className="miniCards">
                    <MiniWeatherCard celsius={this.state.dayOne.celsius} weatherDescription ={this.state.dayOne.weatherDesc} day ={this.state.today +1}/>
                    <MiniWeatherCard celsius={this.state.dayTwo.celsius} weatherDescription ={this.state.dayTwo.weatherDesc} day ={this.state.today +2}/>
                    <MiniWeatherCard celsius={this.state.dayThree.celsius} weatherDescription ={this.state.dayThree.weatherDesc} day ={this.state.today +3}/>
                    <MiniWeatherCard celsius={this.state.dayFour.celsius} weatherDescription ={this.state.dayFour.weatherDesc} day ={this.state.today +4}/>
                        
                    </div>
                </div>
            </div>
            )
            
        }
        // If neither of the above work:
        // It renders a "loading" window until the user accepts the location request
        return <div><Loading message="Please accept the location request.."/></div>
    }
    
    render(){
        return (
            
            <div>
                {this.renderContent()}
            </div>
        )
    }
        
    
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));