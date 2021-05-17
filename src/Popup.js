import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Popup.css';


function Popup(props) {

    const [cityObj, setCityObj] = useState({});

    useEffect(() => {
        axios.get('https://danepubliczne.imgw.pl/api/data/synop/id/' + props.cityID)
            .then(res => {
                setCityObj(res.data)
            })
    },[props.cityID])

    return(
        <div className="popup">
            <div className="popup-inner">
                <span className="close" onClick={() => {props.showPopup(false, 0)}}>X</span>
                <p><span>Suma opadów:</span> {cityObj.suma_opadu}</p>
                <p><span>Ciśnienie:</span> {cityObj.cisnienie}</p>
                <p><span>Predkość wiatru:</span> {cityObj.predkosc_wiatru}</p>
                <p><span>Kierunek wiatru:</span> {cityObj.kierunek_wiatru}</p>
                
            </div>
        </div>
    );
}
export default Popup