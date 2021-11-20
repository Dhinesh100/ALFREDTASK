import React, { useContext } from 'react';
import { PageContext } from '../_contextAPI/WeatherContext';
import ViewPlaces from '../CRUD/ViewPlaces';
import AddPlace from '../CRUD/AddPlace';
import EditPlaces from '../CRUD/EditPlaces';
import UpdatePlaces from '../CRUD/UpdatePlaces';
import HiddenPlaces from '../CRUD/HiddenPlaces';
import ResetDelete from '../CRUD/ResetDelete';

function MainComponent() {
    const [page] = useContext(PageContext);

    if (page === 'View Places') {
        return <ViewPlaces />;
    } else if (page === 'Add Place') {
        return <AddPlace />;
    } else if (page === 'Edit Places') {
        return <EditPlaces />;
    } else if (page === 'Update Places') {
        return <UpdatePlaces />;
    } else if (page === 'Hidden Places') {
        return <HiddenPlaces />;
    } else if (page === 'Reset/Delete All Places') {
        return <ResetDelete />;
    }
}

export default MainComponent;
