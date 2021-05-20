import React from 'react'
import './App.css';
import MainWeather from "./components/mainWeather/mainWeather";
import Weather from "./components/weather/weather";
import Form from "./components/form/form";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Form />
                <MainWeather />
                <Weather />
            </div>
        );
    }
}

export default App;
