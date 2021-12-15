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
    icon: (
      <img
        src={`http://openweathermap.org/img/wn/${response.data.current.weather[0].icon}@2x.png`}
        alt="weather-icon"
      />
    ),
    temp: `${response.data.current.temp.toFixed(0)} C`,
    feelsLike: `${response.data.current.feels_like.toFixed(0)} C`,
    humidity: `${response.data.current.humidity}%`,
  };

  return {
    icon: `http://openweathermap.org/img/wn/${response.data.current.weather[0].icon}@2x.png`,
    currentWeather,
  };
}
