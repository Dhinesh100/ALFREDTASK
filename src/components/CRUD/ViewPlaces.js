import React, { useContext, useState } from 'react';
import './ViewPlaces.css';
import { PlaceContext, HiddenContext, ThemeContext } from '../_contextAPI/WeatherContext';
import { BiHide } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { FaUndo } from 'react-icons/fa';

/**
 * User can view all the added places
 * @return List of all the places
 */
function ViewPlaces() {
    const [
        search,
        setSearch
    ] = useState(''),
        [
            places,
            setPlaces
        ] = useContext(PlaceContext),
        [
            deletedItems,
            setDeletedItems
        ] = useState([]),
        [
            hiddenPlaces,
            setHiddenPlaces
        ] = useContext(HiddenContext),
        [
            theme,
            setTheme
        ] = useContext(ThemeContext),

        /**
         * Deletes the selected place
         * @param {number} key Index in array
         */
        deletePlace = key => {
            setDeletedItems([
                [...places],
                ...deletedItems
            ]);
            const temp = places;
            temp.splice(key, 1);
            setPlaces(temp);

            alert('Deleted Successfully! You cannot undo this operation once you navigate from this page');
        },

        /**
         * Undo on delete operation
         */
        undoDeletedPlace = () => {
            if (deletedItems.length === 0) {
                alert('Undo operation is not possible!');
                return;
            }

            setPlaces(deletedItems[0]);
            const temp = deletedItems;
            temp.splice(0, 1);
            setDeletedItems(temp);
        },

        /**
         * Hide the selected place
         * @function
         */
        hidePlace = key => {
            setHiddenPlaces([places[key], ...hiddenPlaces]);
            var temp = places;
            places.splice(key, 1)
            setPlaces(temp);
        };

    return (
        <div style={{ 'width': '75vw' }}>
            <div className="header">
                <input
                    type="text"
                    placeholder="Search a place"
                    className="view-search-bar"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <FaUndo className="icon" style={theme ? { 'margin': '10px' } : { 'margin': '10px', color: 'white' }} onClick={undoDeletedPlace} />
            </div>

            <div className="displayed">
                {places.filter(item => item.city.toLowerCase().includes(search.toLowerCase()) || item.country.toLowerCase().includes(search.toLowerCase())).map((filteredItem, key) => <div className="displayed-content" key={key}>
                    <small className="item">City: {filteredItem.city}</small>
                    <small className="item">Country: {filteredItem.country}</small>
                    <small className="item">Latitude: {filteredItem.lat}</small>
                    <small className="item">Longitude: {filteredItem.lon}</small>
                    <small className="item">Temperature: {filteredItem.temp}&deg;C</small>
                    <small className="item">Description: {filteredItem.description}</small>
                    <BiHide className="item icon" onClick={() => hidePlace(key)} />
                    <AiFillDelete className="item icon" onClick={() => deletePlace(key)} />
                    <img src={`http://openweathermap.org/img/wn/${filteredItem.icon}.png`} />
                </div>)}
            </div>
        </div>
    );
}

export default ViewPlaces;
