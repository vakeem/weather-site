import React from "react";
import { useState, useEffect } from "react";

import Search from "./Search";
import lookUpWC from "./lookUp";
import { unixToDay } from "./lookUp";
import Indicator from "./Indicator";


export default function App() {
  const [city, setCity] = useState({
    "country": "JP",
    "name": "Tokyo",
    "lat": "35.6895",
    "lng": "139.69171"
});
  const [current, setCurrent] = useState({});
  const [weather, setWeather] = useState('');
  const [temp, setTemp] = useState({});
  const [dailyWO, setDailyWO] = useState({});
  const [dailyMin, setDailyMin] = useState([]);
  const [dailyMax, setDailyMax] = useState([]);
  const [dailyUnix, setDailyUnix] = useState([]);
  const [unit, setUnit] = useState('&temperature_unit=celsius');

  useEffect(() => {
    setWeather(lookUpWC(current.weathercode))
  }, [current])

  useEffect(() => {
    let controller = new AbortController();
    (async () => {
      try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&current=temperature_2m,is_day,relativehumidity_2m,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max${unit}&timeformat=unixtime&timezone=America%2FLos_Angeles`, {
          signal: controller.signal
        });
        const data = await response.json()
        setCurrent(data.current);
        setDailyWO(data.daily.weathercode);
        setDailyMin(data.daily.temperature_2m_min);
        setDailyMax(data.daily.temperature_2m_max);
        setDailyUnix(data.daily.time)
        setTemp({current: data.current.temperature_2m , mix : data.daily.temperature_2m_min[0], max: data.daily.temperature_2m_max[0]})
        controller = null;
      } catch (e) { 
        console.error()
      }
    })();
    return () => controller?.abort();
  }, [city,unit]);
  
  function handleUnit(c) {
    if (unit === '&temperature_unit=celsius') {
      document.getElementById('cel').classList.add('active')
    }
    setUnit(c)
  }

  useEffect(() => {
    if (unit === '&temperature_unit=celsius') {
      document.getElementById('cel').classList.add('active')
      document.getElementById('fah').classList.remove('active')
    } else {
      document.getElementById('fah').classList.add('active')
      document.getElementById('cel').classList.remove('active')
    }
  },[unit])

  return (
    <>
      <div className="weather-header">
        <p>Right now in</p>
        <Search city={city.name} setCity={setCity}/>
        <p>, it's {weather}</p>
        </div>
      <div className="weather">
        <div className="weather-icon">
          <Indicator weather={weather} animated={true} day={current.is_day}/>
        </div>
        <div className="temp">
          <p><span className="temp_num">{Math.round(temp.current)}</span></p>
          <p><span className="temp_lowhigh">{temp.mix} &deg; / {temp.max} &deg; </span></p>
        </div>

        <div className="weather_info">

          <p><i className="fa-solid fa-wind"></i> &nbsp; <span className="weather_info_values">{current.windspeed_10m }</span> <span className="weather_info_units">kmph</span></p>
          <p><i className="fa-solid fa-droplet"></i> &nbsp; <span className="weather_info_values">{current.relativehumidity_2m + " "}</span> <span className="weather_info_units">%</span></p>
          <p><i class="fa-solid fa-umbrella"></i> &nbsp; <span className="weather_info_values">{current.precipitation}</span> <span className="weather_info_units">mm</span ></p>
        </div>
      </div>
      <div className="daily-forecast">
        {new Array(5).fill(0).map((_,i) => {
          return (
          <div className="daily-forecast_day">
            <Indicator weather={lookUpWC(dailyWO[i + 1])} animated={false}/> 
            <p><span className="daily-forecast_day_date">{Math.round(dailyMin[i + 1])} &deg; / {Math.round(dailyMax[i + 1])} &deg;</span></p>
            <p><span className="daily-forecast_day_date">{unixToDay(dailyUnix[i + 1], i + 1)}</span></p>
          </div>)
        })}
      </div>
      <div className="toggle">
        <div className="toggle_c" id="cel" onClick={() => handleUnit('&temperature_unit=celsius')}>&deg; C</div>
        <p>|</p>
        <div className="toggle_f" id="fah" onClick={() => handleUnit('&temperature_unit=fahrenheit')}>&deg; F</div>
      </div>
    </>
  )
};





/* { weather === 'Clear' || weather === 'Sandstorm'
            ? <div className="sunny"></div>
            : weather === 'Cloudy'
            ? <div className="cloudy">
                <div className="sun"></div>
              </div>
            : weather === 'Haze' || weather ===  'Mist' || weather ===  'Fog'
            ? <><div className="cloudy-haze"></div>
              <div className="haze haze1"></div>
              <div className="haze-right haze2"></div>
              <div className="haze haze3"></div>
              <div className="haze-left haze4"></div>
              <div className="haze haze5"></div></>
            : weather === 'Thunderstorm'
            ? <><div className="cloudy-thunder"></div>
            <div className="drops drop1"></div>
            <div className="drops drop2"></div>
            <div className="drops drop3"></div>
            <div className="drops drop4"></div>
            <div className="drops drop5"></div>
            <div className="drops drop5"></div>
            <div className="drops drop6"></div>
            <div className="drops drop7"></div></>
            : weather === 'Rain' || weather ===  'Drizzle'
            ? <><div className="cloudy-rain"></div>
            <div className="drops drop1"></div>
            <div className="drops drop2"></div>
            <div className="drops drop3"></div>
            <div className="drops drop4"></div>
            <div className="drops drop5"></div>
            <div className="drops drop5"></div>
            <div className="drops drop6"></div>
            <div className="drops drop7"></div></>
            : weather === 'Snow'|| weather ===  'Hail'
            ? <><div className="cloudy-snow"></div>
            <div className="flake flake1"></div>
            <div className="flake flake2"></div>
            <div className="flake flake3"></div>
            <div className="flake flake4"></div>
            <div className="flake flake5"></div>
            <div className="flake flake6"></div>
            <div className="flake flake7"></div>
            <div className="flake flake8"></div>
            <div className="flake flake9"></div>
            <div className="flake flake10"></div></>
            : <></>
            } */