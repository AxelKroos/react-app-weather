import {CURRENT_CITY, ADD_CITY, DELETE_CITY, WEATHER_FETCH_DATA_SUCCESS} from "./actionTypes";

export function changeValue(value) {
    return {
        type: 'CURRENT_CITY',
        payload: value
    }
}

export const asyncGetWeather = (data) => dispatch => {
    dispatch({
        type: 'ADD_CITY',
        payload: {
            city: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            weather: data.weather,
            humidity: data.main.humidity,
            speed: data.wind.speed,
            feelsLike: data.main.feels_like
        }
    })
}

export function deleteCity(index) {
    return {
        type: 'DELETE_CITY',
        payload: index
    }
}

export const weatherFetchData = (data) => dispatch => {
    dispatch({
        type: 'WEATHER_FETCH_DATA_SUCCESS',
        payload: {
            city: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            weather: data.weather,
            humidity: data.main.humidity,
            speed: data.wind.speed,
            feelsLike: data.main.feels_like
        }
    })
}
