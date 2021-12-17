import { openWeatherApi, openWeatherApiKey } from "../openWeatherApiConfig";
import React from "react";
import { openModal } from "../../components";

//Function that calls the data from weather API, models the data and return to screen view

export default async function getWeather(lat, lng) {
  try {
    const response = await openWeatherApi.get(
      `/onecall?lat=${lat}&lon=${lng}&exclude=hourly,minutely&units=metric&appid=${openWeatherApiKey}`
    );

    //To see an error feedback, comment the lines 7, 8, 9 and use code below on lines 13 14 15.

    // const response = await openWeatherApi.get(
    //   `/onecall?lat=${lat}&lon=${lng}&exclude=hourly,minutely&units=metric&appid=${''}`
    // );
    if (response.ok) {
      const currentWeather = {
        date: `${
          new Date(response.data.current.dt * 1000)
            .toLocaleDateString("pt-br")
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
      const dailyWeather = response.data.daily.map((item, index) => {
  
        return {
          date: `${
            new Date(item.dt * 1000)
              .toLocaleDateString("pt-br")
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
        ...response,
        data: {
          icon: `http://openweathermap.org/img/wn/${response.data.current.weather[0].icon}@2x.png`,
          currentWeather,
          dailyWeather,
        },
      };
    } else {
      throw response;
    }
  } catch (response) {
    openModal.serverErrorModal({ response });
    return response;
  }
}
