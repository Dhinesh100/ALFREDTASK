import React, { useContext } from 'react';
import '../../App.css';
import Sidebar from '../Sidebar/Sidebar';
import { ThemeContext } from '../_contextAPI/WeatherContext';
import MainComponent from '../main/MainComponent';
import 'weather-icons/css/weather-icons.css';

function Dashboard() {
    const [theme, setTheme] = useContext(ThemeContext);
    return (
        <div className={theme ? "app" : "app-dark"}>
            <div className={theme ? "app-body" : "app-body-dark"}>
                <Sidebar />
                <div className="right">
                    <MainComponent />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
