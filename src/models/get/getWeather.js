import { openWeatherApi, openWeatherApiKey } from "../openWeatherApiConfig";
import React from "react";

export default async function getWeather(lat, lng) {
  const response = await openWeatherApi.get(
    `/onecall?lat=${lat}&lon=${lng}&exclude=hourly,minutely&units=metric&appid=${openWeatherApiKey}`
  );

  const currentWeather = {
    date: `${
      new Date(response.data.current.dt * 1000)
        .toLocaleString("pt-br", { timeZone: "UTC" })
        .split(" ")[0]
    }`,

    temp: `${response.data.current.temp.toFixed(0)} ºC`,
    feelsLike: `${response.data.current.feels_like.toFixed(0)} ºC`,
    humidity: `${response.data.current.humidity}%`,
    icon: (
      <img
        src={`http://openweathermap.org/img/wn/${response.data.current.weather[0].icon}@2x.png`}
        alt="weather-icon"
      />
    ),
  };
console.log({response})
  const dailyWeather = response.data.daily.map((item, index) => {
    return {
      date: `${
        new Date(item.dt * 1000)
          .toLocaleString("pt-br", { timeZone: "UTC" })
          .split(" ")[0]
      }`,
      dayTemp: `${item.temp.day.toFixed(0)} ºC`,
      nightTemp: `${item.temp.night.toFixed(0)} ºC`,
      minTemp: `${item.temp.min.toFixed(0)} ºC`,
      maxTemp: `${item.temp.max.toFixed(0)} ºC`,
      feelsLikeDay: `${item.feels_like.day.toFixed(0)} ºC`,
      feelsLikeNight: `${item.feels_like.night.toFixed(0)} ºC`,
      humidity: `${item.humidity}%`,
      icon: (
        <img
          src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          alt="weather-icon"
        />
      ),
    };
  });
  return {
    icon: `http://openweathermap.org/img/wn/${response.data.current.weather[0].icon}@2x.png`,
    currentWeather,
    dailyWeather,
  };
}
