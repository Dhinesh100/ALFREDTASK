import React, { useState } from 'react';

export const ThemeContext = React.createContext();
export const PageContext = React.createContext();
export const CityContext = React.createContext();
export const CountryContext = React.createContext();
export const PlaceContext = React.createContext();
export const HiddenContext = React.createContext();

/**
 *
 * @param {component} props
 * @returns children
 */
export function WeatherProvider({ children }) {
    const [
        page,
        setPage
    ] = useState('View Places'),
        [
            city,
            setCity
        ] = useState(),
        [
            country,
            setCountry
        ] = useState(),
        [
            places,
            setPlaces
        ] = useState([]),
        [
            hiddenPlaces,
            setHiddenPlaces
        ] = useState([]),
        [
            theme,
            setTheme
        ] = useState(true);

    return (
        <ThemeContext.Provider value={[
            theme,
            setTheme
        ]}>
            <PageContext.Provider value={[
                page,
                setPage
            ]}>
                <CityContext.Provider value={[
                    city,
                    setCity
                ]}>
                    <CountryContext.Provider value={[
                        country,
                        setCountry
                    ]}>
                        <PlaceContext.Provider value={[
                            places,
                            setPlaces
                        ]}>
                            <HiddenContext.Provider value={[
                                hiddenPlaces,
                                setHiddenPlaces
                            ]}>
                                {children}
                            </HiddenContext.Provider>
                        </PlaceContext.Provider>
                    </CountryContext.Provider>
                </CityContext.Provider>
            </PageContext.Provider>
        </ThemeContext.Provider>
    );
}
