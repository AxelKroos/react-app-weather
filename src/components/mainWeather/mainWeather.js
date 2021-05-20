import React from 'react'
import {connect} from "react-redux";
import {weatherFetchData} from "../../store/actions/actions";
import classes from './mainWeather.module.css'

class MainWeather extends React.Component {

    componentWillMount() {
        let gettingWeather = async () => {
            const request = await fetch("https://ipinfo.io/json?token=83f39a21c4b1a4")
            const json = await request.json()
            const api_key = '0a18303f01a73e215e930966eb1a77bc'
            this.props.fetchData(`https://api.openweathermap.org/data/2.5/weather?q=${json.city}&appid=${api_key}&units=metric`)
        }
        gettingWeather()
    }

    render() {

        const mainWeather = this.props.mainWeather.map((elem, index) => {
            return (
                <div className={classes.mainWeather}>
                    <h3>Ваше местоположение</h3>
                    <p>Город: <span style={{color: 'white'}}>{elem.city}, {elem.country}</span></p>
                    <p>Температура: <span style={{color: 'palegreen'}}>{elem.temp}°</span></p>
                    <p>Ветер: {elem.speed} м/c</p>
                    <p>Влажность: {elem.humidity}%</p>
                    <p>Ощущается как: {elem.feelsLike}°</p>
                </div>
            )
        })

        return <div>
            {mainWeather}
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        mainWeather: state.currentWeather.mainWeather
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => {
            const currentWeather = async () => {
                const api_url = await fetch(url)
                const data = await api_url.json()
                dispatch(weatherFetchData(data))
            }
            currentWeather()
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(MainWeather);