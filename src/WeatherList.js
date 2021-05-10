import React, {Component} from 'react';
import './WeatherList.css';
import axios from 'axios';
import WeatherCity from './WeatherCity';

class WeatherList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            weatherList: [],
            filteredWeatherList: [],
        };
    }
    componentDidMount() {
        this.getWeatherData();
    }

    getWeatherData = () => {
        axios.get('https://danepubliczne.imgw.pl/api/data/synop')
            .then(res => {
                this.setState((state) => {
                    let newWeatherList = this.setState({weatherList: res.data});

                    return({
                        weatherList: newWeatherList
                    });
                });    
                
                this.filterWeatherList();
            });     
    }
    

    filterWeatherList = () => {
        this._inputFilter.value = this._inputFilter.value.trim();

        this.setState((state) => {
            let newFilteredWeatherList = state.weatherList.filter((item) => {
                return(item.stacja.includes(this._inputFilter.value));
            });

            return({
                filteredWeatherList: newFilteredWeatherList
            });
        });
    }

    render() {
        return(
            <div className="container">
                <input ref={element => this._inputFilter = element} onChange={this.filterWeatherList} type="text" placeholder="Znajdź miasto"></input>
                <WeatherCity weatherList={this.state.filteredWeatherList}/>
            </div>
        );
    }
}
export default WeatherList;