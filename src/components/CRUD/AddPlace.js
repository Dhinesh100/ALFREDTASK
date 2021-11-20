import React, { useContext, useState } from 'react';
import './AddPlace.css';
import { CityContext, CountryContext, PlaceContext, ThemeContext } from '../_contextAPI/WeatherContext';

/**
 * @type {string} Map API Key
 */
const API_KEY = '222127aadb3ac2da7611f64cb9a044bd';

/**
 * Lets user add a place
 */
function AddPlace() {
    const [
        city,
        setCity
    ] = useContext(CityContext),
        [
            country,
            setCountry
        ] = useContext(CountryContext),
        [places, setPlaces] = useContext(PlaceContext),
        [
            currentPlace,
            setCurrentPlace
        ] = useState(null),
        [
            theme,
            setTheme
        ] = useContext(ThemeContext),

        /**
         * Gets the weather of the selected place
         */
        getWeather = async () => {
            var index = places.findIndex(val => val.city === city);
            
            if (index !== -1) {
                alert(`${city} has already been added`);
                return;
            }
            
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`),

                response = await api_call.json();

            if (response.cod === '404') {
                alert(`Error Code ${response.cod}: The entered location is not found`);
                setCity('');
                setCountry('');
                return;
            }

            const place = {
                'city': response.name,
                'country': response.sys.country,
                'lon': response.coord.lon,
                'lat': response.coord.lat,
                'temp': Math.floor(response.main.temp - 273.15),
                'temp_min': Math.floor(response.main.temp_min - 273.15),
                'temp_max': Math.floor(response.main.temp_max - 273.15),
                'description': response.weather[0].description,
                'icon': response.weather[0].icon
            };

            setCurrentPlace(place);
            setPlaces(prevState => [
                place,
                ...prevState
            ]);

            setCity('');
            setCountry('');
        };

    return (
        <div>
            <div className="input">
                <div>
                    <input placeholder="City (e.g. New York)" className="input-field" type="text" value={city} onChange={e => setCity(e.target.value)} />
                </div>
                <div>
                    <input placeholder="Country (e.g. US)" className="input-field" type="text" value={country} onChange={e => setCountry(e.target.value)} />
                </div>
                <div>
                    <input type="button" value="Add Place" className="button" onClick={getWeather} />
                </div>
            </div>
            <h5 style={theme ? { 'textAlign': 'center' } : { 'textAlign': 'center', color: 'white' }} className="text"><span style={{ 'color': 'red' }}>*</span>The current weather of the place you have added will display here</h5>
            {currentPlace === null
                ? <h5 style={theme ? { 'textAlign': 'center' } : { 'textAlign': 'center', color: 'white' }} className="text">No weather to display</h5>
                : <div className="weather-details">
                    <div>
                        <img style={theme ? null : { backgroundColor: 'white' }} src={`http://openweathermap.org/img/wn/${currentPlace.icon}@4x.png`} />
                        <h1 style={theme ? { 'textAlign': 'center' } : { 'textAlign': 'center', color: 'white' }}>{currentPlace.temp}&deg;C</h1>
                        <div className="temperature">
                            <div>
                                <h4 style={theme ? null : { color: 'white' }}>{currentPlace.temp_min}&deg;C</h4>
                            </div>
                            <div>
                                <h4 style={theme ? null : { color: 'white' }}>{currentPlace.temp_max}&deg;C</h4>
                            </div>
                        </div>
                        <h3 style={theme ? { 'textAlign': 'center' } : { 'textAlign': 'center', color: 'white' }}>{currentPlace.description}</h3>
                        <h3 style={theme ? { 'textAlign': 'center' } : { 'textAlign': 'center', color: 'white' }}>{currentPlace.city}, {currentPlace.country}</h3>
                    </div>
                </div>
            }
        </div>
    );
}

export default AddPlace;
