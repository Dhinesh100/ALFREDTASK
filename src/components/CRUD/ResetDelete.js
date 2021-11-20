import React, { useContext } from 'react';
import './ResetDelete.css';
import { PlaceContext, ThemeContext } from '../_contextAPI/WeatherContext';

/**
 *
 * @returns Reset/Delete Button
 */
function ResetDelete() {
    const [
        places,
        setPlaces
    ] = useContext(PlaceContext),
    [
        theme,
        setTheme
    ] = useContext(ThemeContext),

        /**
         * Deletes all places
         */
        deleteAll = () => {
            if (places.length === 0) {
                alert('You have not added any place');
                return;
            }

            setPlaces([]);
            alert('All the places successfully cleared');
        };

    return (
        <div className="screen">
            <div>
                <h3 style={theme ? null : {color: 'white'}}>Click on this button to reset or delete all the places you have added</h3>
                <input type="button" value="DELETE" className="delete-button" onClick={deleteAll} />
                <h3 style={theme ? {textAlign: 'center'} : {color: 'white', textAlign: 'center'}}><span style={{ 'color': 'red' }}>*</span>You cannot undo this operation</h3>
            </div>
        </div>
    );
}

export default ResetDelete;
