import React, {Component} from 'react';
import './WeatherList.css';
import axios from 'axios';
import WeatherCity from './WeatherCity';
import Popup from './Popup';

class WeatherList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            weatherList: [],
            filteredWeatherList: [],
            displayPopup: false,
            popupItemID: 0,
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
        this._inputFilter.value = this._inputFilter.value.trim().toLowerCase();

        this.setState((state) => {
            let newFilteredWeatherList = state.weatherList.filter((item) => {
                return(item.stacja.toLowerCase().includes(this._inputFilter.value));
            });

            return({
                filteredWeatherList: newFilteredWeatherList
            });
        });
    }

    showPopup = (popupState,id) => {
        this.setState({displayPopup: popupState, popupItemID: id})
      
    }

    render() {
        return(
            <div className="container">
                {this.state.displayPopup && <Popup showPopup={this.showPopup} cityID={this.state.popupItemID}/>}
                <input ref={element => this._inputFilter = element} onChange={this.filterWeatherList} type="text" placeholder="Znajdź miasto..."></input>
                <WeatherCity weatherList={this.state.filteredWeatherList} showPopup={this.showPopup}/>
            </div>
        );
    }
}
export default WeatherList;