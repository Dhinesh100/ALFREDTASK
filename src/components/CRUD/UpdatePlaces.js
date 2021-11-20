import React, { useState, useContext } from 'react';
import './UpdatePlaces.css';
import { PlaceContext, CityContext, CountryContext } from '../_contextAPI/WeatherContext';
import { GrUpdate } from 'react-icons/gr';

/**
 * @type {string}
 */
const API_KEY = '222127aadb3ac2da7611f64cb9a044bd';

/**
 *
 * @returns List of all the places while updating the prefered
 */
function UpdatePlaces() {
    const [
        search,
        setSearch
    ] = useState(''),
        [
            places,
            setPlaces
        ] = useContext(PlaceContext),
        [
            city,
            setCity
        ] = useContext(CityContext),
        [
            country,
            setCountry
        ] = useContext(CountryContext),

        /**
         *
         * @param {number} key
         * @returns
         */
        update = async key => {
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${places[key].city},${places[key].country}&appid=${API_KEY}`),

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

            setPlaces(prevState => {
                prevState[key] = place;
                return prevState;
            });

            setCity('');
            setCountry('');

            alert(`${places[key].city}, ${places[key].country} is up to date`);
        };

    return (
        <div>
            <div className="header">
                <input
                    type="text"
                    placeholder="Search a place"
                    className="search-bar"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            <div className="display">
                {places.filter(item => {
                    if (item.city.toLowerCase().includes(search.toLowerCase()) || item.country.toLowerCase().includes(search.toLowerCase())) {
                        return item;
                    }
                }).map((filteredItem, key) => <div className="content" style={{ 'backgroundColor': 'lightblue' }} key={key}>
                    <small className="item">City: {filteredItem.city}</small>{' '}
                    <small className="item">Country: {filteredItem.country}</small>{' '}
                    <small className="item">Temperature: {filteredItem.temp}&deg;C</small>
                    <GrUpdate className="item icon" onClick={() => update(key)} />
                </div>)}
            </div>
        </div>
    );
}

export default UpdatePlaces;
