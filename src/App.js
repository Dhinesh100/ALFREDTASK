import { WeatherProvider, } from './components/_contextAPI/WeatherContext';
import 'weather-icons/css/weather-icons.css';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  // const [theme, setTheme] = useContext(ThemeContext);

  return (
    <>
      <WeatherProvider>
        <Dashboard />
      </WeatherProvider>
    </>
  );
}

export default App;
