import React, { useContext } from 'react';
import './Sidebar.css';
import { PageContext, ThemeContext } from '../_contextAPI/WeatherContext';

function Sidebar() {
    const [
        page,
        setPage
    ] = useContext(PageContext),
    [
        theme,
        setTheme
    ] = useContext(ThemeContext);

    return (
        <div className={theme ? "sidebar" : "sidebar-dark"}>
            <div className="sidebar-header">
                <h2 style={theme ? { 'textAlign': 'center' } : { 'textAlign': 'center', color: '#fff' }}>Weather Updater</h2>
            </div>
            <div className="sidebar-content">
                <div className="sidebar-items" style={page === 'View Places'
                    ? { 'backgroundColor': '#dadbd3' }
                    : (theme ? null : { color: '#fff' })} onClick={() => setPage('View Places')}>
                    <big>View Places</big>
                </div>
                <div className="sidebar-items" style={page === 'Add Place'
                    ? { 'backgroundColor': '#dadbd3' }
                    : (theme ? null : { color: '#fff' })} onClick={() => setPage('Add Place')}>
                    <big>Add Place</big>
                </div>
                <div className="sidebar-items" style={page === 'Edit Places'
                    ? { 'backgroundColor': '#dadbd3' }
                    : (theme ? null : { color: '#fff' })} onClick={() => setPage('Edit Places')}>
                    <big>Edit Places</big>
                </div>
                <div className="sidebar-items" style={page === 'Update Places'
                    ? { 'backgroundColor': '#dadbd3' }
                    : (theme ? null : { color: '#fff' })} onClick={() => setPage('Update Places')}>
                    <big>Update Places</big>
                </div>
                <div className="sidebar-items" style={page === 'Hidden Places'
                    ? { 'backgroundColor': '#dadbd3' }
                    : (theme ? null : { color: '#fff' })} onClick={() => setPage('Hidden Places')}>
                    <big>Hidden Places</big>
                </div>
                <div className="sidebar-items" style={page === 'Reset/Delete All Places'
                    ? { 'backgroundColor': '#dadbd3' }
                    : (theme ? null : { color: '#fff' })} onClick={() => setPage('Reset/Delete All Places')}>
                    <big>Reset/Delete All Places</big>
                </div>
                <div className="sidebar-items" style={theme ? null : { color: '#fff' }}>
                    <input type="checkbox" onClick={() => setTheme(prevState => !prevState)}/>DARK MODE
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
