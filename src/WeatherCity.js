import React from 'react';
import './WeatherCity.css';

function WeatherCity(props) {

    let weatherList = props.weatherList;

    let cityInfoElements = weatherList.map(item => {
        return (
            <div className="city-info" key={item.id_stacji}>
                <h3>{item.stacja}</h3>
                <p><span>Temperatura:</span> {item.temperatura}°C</p>
                <p><span>Godzina pomiaru:</span> {item.godzina_pomiaru}</p>
                <p><span>Data pomiaru:</span> {item.data_pomiaru}</p>
            </div>
        );
    })

    return (
        <div className="city-info">
            {cityInfoElements}
        </div>
    );
}

export default WeatherCity;