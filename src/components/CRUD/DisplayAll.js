import React, { useState, useContext } from 'react';
import { PlaceContext } from '../_contextAPI/WeatherContext';
import './DisplayAll.css';
import { AiFillEdit } from 'react-icons/ai';

/**
 * Displays all the places letting user to edit one
 * @param {function} setEdit props
 * @param {function} setEditId props
 * @returns all the places
 */
function DisplayAll(props) {
    const [
        search,
        setSearch
    ] = useState(''),
        [places] = useContext(PlaceContext),

        edit = key => {
            props.setEdit('edit');
            props.setEditId(key);
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
                    <AiFillEdit className="item icon" onClick={() => edit(key)} />
                </div>)}
            </div>
        </div>
    );
}

export default DisplayAll;
