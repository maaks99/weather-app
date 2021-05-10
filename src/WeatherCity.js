import React from 'react';
import './WeatherCity.css';

function WeatherCity(props) {
    return(
        <div className="city-info"> 
                <h3>Kraków</h3>
                <p>Temperatura 23</p>
                <p>Wilgotnosc</p>
                <p>Cisnienie</p>
        </div>
    );
}

export default WeatherCity;