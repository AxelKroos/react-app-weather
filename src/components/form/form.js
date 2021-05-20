import React from 'react'
import {connect} from "react-redux";
import {changeValue, asyncGetWeather} from "../../store/actions/actions";
import classes from './form.module.css'

class Form extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={(event) => this.props.add(this.props.currentValue, event.preventDefault())}>
                        <input type="text" name='city' className={classes.formInput} placeholder="Введите город"
                               onChange={(event => this.props.changeValue(event.target.value))} value={this.props.currentValue}/>
                    <button className={classes.button}>Добавить</button>
                </form>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        currentValue: state.currentWeather.currentValue
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeValue: (value) => dispatch(changeValue(value)),
        add: (city) => {
            let addWeather = async (city) => {
                const api_key = '0a18303f01a73e215e930966eb1a77bc'
                const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
                const data = await api_url.json()
                if (data.cod == '400' || data.cod == '404') {
                    return null
                }
                dispatch(asyncGetWeather(data))
            }
            addWeather(city)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
