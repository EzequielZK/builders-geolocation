import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addressAction, weatherAction } from "../../../store/actions";
import { Cards, Table } from "../components";
import cssStyles from "./homeView.module.css";

function HomeView(props) {
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(getPosition);
  });

  const getPosition = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    // props.addressAction(lat, lng);
    // props.weatherAction(lat, lng);
  };

  return (
    <div className={cssStyles.container}>
      <Cards is_loading={props.address.isLoading || props.weather.isLoading}>
        <Table
          title={`${props.address.city}, ${props.address.state}`}
          titleIcon={props.weather.payload?.icon}
          headers={["DATE", "TEMP", "FEELS LIKE", "HUMIDITY", "WEATHER"]}
          body={[{ ...props.weather.payload?.currentWeather }]}
        />
      </Cards>
      <Cards is_loading={props.address.isLoading || props.weather.isLoading}>
        <Table
          title="Next few days"
          // titleIcon={props.weather.payload.icon}
          headers={[
            "DATE",
            "DAY TEMP",
            "NIGHT TEMP",
            "MIN TEMP",
            "MAX TEMP",
            "DAY FEELING",
            "NIGHT FEELING",
            "HUMIDITY",
            "WEATHER",
          ]}
          // body={props.weather.payload?.dailyWeather}
          body={[
            {
              date: `${
                new Date()
                  .toLocaleString("pt-br", { timeZone: "UTC" })
                  .split(" ")[0]
              }`,
              dayTemp: `${Number("20").toFixed(0)} ºC`,
              nightTemp: `${Number("20").toFixed(0)} ºC`,
              minTemp: `${Number("20").toFixed(0)} ºC`,
              maxTemp: `${Number("20").toFixed(0)} ºC`,
              feelsLikeDay: `${Number("20").toFixed(0)} ºC`,
              feelsLikeNight: `${Number("20").toFixed(0)} ºC`,
              humidity: `${Number("20")}%`,
              icon: (
                <img
                  src={`http://openweathermap.org/img/wn/${"10d"}@2x.png`}
                  alt="weather-icon"
                />
              ),
            },
            {
              date: `${
                new Date()
                  .toLocaleString("pt-br", { timeZone: "UTC" })
                  .split(" ")[0]
              }`,
              dayTemp: `${Number("20").toFixed(0)} ºC`,
              nightTemp: `${Number("20").toFixed(0)} ºC`,
              minTemp: `${Number("20").toFixed(0)} ºC`,
              maxTemp: `${Number("20").toFixed(0)} ºC`,
              feelsLikeDay: `${Number("20").toFixed(0)} ºC`,
              feelsLikeNight: `${Number("20").toFixed(0)} ºC`,
              humidity: `${Number("20")}%`,
              icon: (
                <img
                  src={`http://openweathermap.org/img/wn/${"10d"}@2x.png`}
                  alt="weather-icon"
                />
              ),
            },
            {
              date: `${
                new Date()
                  .toLocaleString("pt-br", { timeZone: "UTC" })
                  .split(" ")[0]
              }`,
              dayTemp: `${Number("20").toFixed(0)} ºC`,
              nightTemp: `${Number("20").toFixed(0)} ºC`,
              minTemp: `${Number("20").toFixed(0)} ºC`,
              maxTemp: `${Number("20").toFixed(0)} ºC`,
              feelsLikeDay: `${Number("20").toFixed(0)} ºC`,
              feelsLikeNight: `${Number("20").toFixed(0)} ºC`,
              humidity: `${Number("20")}%`,
              icon: (
                <img
                  src={`http://openweathermap.org/img/wn/${"10d"}@2x.png`}
                  alt="weather-icon"
                />
              ),
            },
          ]}
        />
      </Cards>
    </div>
  );
}
function mapStateToProps(state) {
  const { address, weather } = state;
  return {
    address,
    weather,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addressAction, weatherAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
