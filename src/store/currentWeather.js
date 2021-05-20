import {CURRENT_CITY, ADD_CITY, DELETE_CITY, WEATHER_FETCH_DATA_SUCCESS} from "./actions/actionTypes";

const initialState = {
    mainWeather: [],
    currentValue: '',
    currentCity: '',
    other: [],
}

export default function currentWeather(state = initialState, action) {
    switch (action.type) {
        case CURRENT_CITY:
            return {
                ...state, currentValue: action.payload
            }
        case ADD_CITY:
            return {
                ...state, currentValue: '',
                other: [...state.other, action.payload]
            }
        case DELETE_CITY:
            return {
                ...state,
                other: [...state.other.slice(0, action.payload),
                    ...state.other.slice(action.payload + 1)]
            }
        case WEATHER_FETCH_DATA_SUCCESS:
            return {
                ...state,
                mainWeather: [...state.mainWeather, action.payload]
            }
        default:
            return state
    }
}