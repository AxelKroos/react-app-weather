import React from 'react'
import classes from './weather.module.css'
import {connect} from "react-redux";
import {deleteCity} from "../../store/actions/actions";

class Weather extends React.Component {
    render() {
        const weather = this.props.other.map((elem, index) => {

            const img = `http://openweathermap.org/img/w/${elem.weather[0].icon}.png`

            return (
                <div className={classes.weather}>
                    <h3>Your location</h3>
                    <p>City, Country: <span style={{color: 'white'}}>{elem.city}, {elem.country}</span></p>
                    <img src={img} alt={elem.weather[0].description}/>
                    <p>Temp: <span style={{color: 'palegreen'}}>{elem.temp}°</span></p>
                    <p>Description: <span style={{color: 'gold'}}>{elem.weather[0].description}</span></p>
                    <p>Wind: {elem.speed} м/c</p>
                    <p>Humidity: {elem.humidity}%</p>
                    <p>Feels like: {elem.feelsLike}°</p>
                    <button onClick={() => this.props.deleteCity(index)}>Delete</button>
                </div>
            )
        })
        return (
            <div className={classes.allWeathers}>
                {weather}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        other: state.currentWeather.other
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCity: (index) => {
            dispatch(deleteCity(index))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
