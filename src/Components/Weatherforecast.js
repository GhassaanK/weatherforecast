import React, { useState } from 'react'
import './Weatherforecast.css'
import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import humidity_icon from '../Assets/humidity.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'


const Weatherforecast = () => {


    let api_key = "6a3a92b020eed46904152458e6ab1dcd"

    const [wicon, setWicon] = useState(cloud_icon)

    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value===""){
            return 0;
        }

        let url =  `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}`
        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent")
        const wind = document.getElementsByClassName("wind-rate")
        const temp = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")

        humidity[0].innerHTML = data.main.humidity;
        wind[0].innerHTML = data.wind.speed + " km/h";
        temp[0].innerHTML = data.main.temp;
        location[0].innerHTML = data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
            setWicon(clear_icon)
        }else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
            setWicon(cloud_icon)
        }else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
            setWicon(drizzle_icon)
        }else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
            setWicon(drizzle_icon)
        }else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
            setWicon(rain_icon)
        }else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
            setWicon(rain_icon)
        }else if(data.weather[0].icon==="013d" || data.weather[0].icon==="13n"){
            setWicon(snow_icon)
        }else{
            setWicon(clear_icon)
        }
    }


  return (
    <div className='container'>
        <div className="topbar">
            <input type="text" className="cityInput" placeholder="Search" />
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="Search Button" />
            </div>
        </div>
        <div className="weather-img">
            <img src={wicon} alt="Weather Icon" />
        </div>
        <div className="weather-temp">25°C</div>
        <div className="weather-location">Pakistan</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className='icon' />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className='icon' />
                <div className="data">
                    <div className="wind-rate">15 km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weatherforecast