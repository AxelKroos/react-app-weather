import React from 'react'
import classes from './weather.module.css'
import {connect} from "react-redux";
import {deleteCity} from "../../store/actions/actions";

class Weather extends React.Component {
    render() {
        const weather = this.props.other.map((elem, index) => {
            return (
                <div className={classes.weather}>
                    <p>Город: <span style={{color: 'white'}}>{elem.city}, {elem.country}</span></p>
                    <p>Температура: <span style={{color: 'palegreen'}}>{elem.temp}°</span></p>
                    <p>Ветер: {elem.speed} м/c</p>
                    <p>Влажность: {elem.humidity}%</p>
                    <p>Ощущается как: {elem.feelsLike}°</p>
                    <button onClick={() => this.props.deleteCity(index)}>Удалить</button>
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
