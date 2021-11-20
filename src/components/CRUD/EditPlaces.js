import React, { useState } from 'react';
import './EditPlaces.css';
import DisplayAll from './DisplayAll';
import EditOne from './EditOne';

/**
 *
 * @returns Display all places || Edit the selected
 */
function EditPlaces() {
    const [
        edit,
        setEdit
    ] = useState('display'),
        [
            editId,
            setEditId
        ] = useState(-1);

    if (edit === 'display') {
        return <DisplayAll setEdit={setEdit} setEditId={setEditId} />;
    }
    return <EditOne setEdit={setEdit} editId={editId} setEditId={setEditId} />;

}

export default EditPlaces;
