import { useEffect, useState } from 'react';
import './Weather.scss';

const Weather = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=52.520008&lon=13.404954&appid=cd60394c3db9537b36042f0b3144d307&units=metric&lang=en'
    )
      .then(res => res.json())
      .then(weather => {
        setData(weather);
      });
  }, []);

  const tempMax = data && data.main.temp_max.toString();
  const tempMin = data && data.main.temp_min.toString();
  const weatherCondition = data && data.weather[0].main;
  const weatherIcon = data && data.weather[0].icon;

  return (
    data &&
    data.main && (
      <div className="weatherContainer">
        <p>Weather expected for today:</p>
        <div className="weather">
          <p>Temp max: {tempMax.slice(0, 2)}º</p>
          <p>Temp min: {tempMin.slice(0, 2)}º</p>
          <p className="weatherCondition">
            {weatherCondition}:{' '}
            <img
              src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
              alt="Weather Icon"
            />
          </p>
        </div>
      </div>
    )
  );
};

export default Weather;
