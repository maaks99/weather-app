import React, {Component} from 'react';
import './WeatherList.css';
import axios from 'axios';
import WeatherCity from './WeatherCity';

class WeatherList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            weatherList: []
        };
    }
    componentDidMount() {
        this.getWeatherData();
    }

    getWeatherData = () => {
        axios.get('https://danepubliczne.imgw.pl/api/data/synop')
            .then(res => {
                
                let array = res.data;
                console.log(array);

                return({
                    weatherList : array
                });
               
            });
    }

    render() {
        return(
            <div>

                <WeatherCity />
            </div>
        );
    }
}
export default WeatherList;