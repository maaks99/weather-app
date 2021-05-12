import React,{useState,useEffect} from 'react';
import axios from 'axios';


function Popup(props) {

    const [cityObj, setCityObj] = useState({});

    useEffect(() => {
        axios.get('https://danepubliczne.imgw.pl/api/data/synop/id/' + props.cityID)
            .then(res => {
                setCityObj(res.data)
            })
    },[])

    console.log(cityObj);

    return(
        <div className="popup">
            <span onClick={() => {props.showPopup(false, 0)}}>X</span>
            <h2>{cityObj.stacja}</h2>
        </div>
    );
}
export default Popup