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

            const img = `http://openweathermap.org/img/w/${elem.weather[0].icon}.png`

            return (
                <div className={classes.mainWeather}>
                    <h3>Your location</h3>
                    <p>City, Country: <span style={{color: 'white'}}>{elem.city}, {elem.country}</span></p>
                    <img src={img} alt={elem.weather[0].description}/>
                    <p>Temp: <span style={{color: 'palegreen'}}>{elem.temp}°</span></p>
                    <p>Description: <span style={{color: 'gold'}}>{elem.weather[0].description}</span></p>
                    <p>Wind: {elem.speed} м/c</p>
                    <p>Humidity: {elem.humidity}%</p>
                    <p>Feels like: {elem.feelsLike}°</p>
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