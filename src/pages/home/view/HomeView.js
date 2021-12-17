import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addressAction, weatherAction } from "../../../store/actions";
import { Cards, Table } from "../components";
import cssStyles from "./homeView.module.css";

function HomeView(props) {
  React.useEffect(() => {
    const getPosition = (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      props.addressAction(lat, lng);
      props.weatherAction(lat, lng);
    };
    navigator.geolocation.getCurrentPosition(getPosition);
  }, []);
  return (
    <div className={cssStyles.container}>
      <Cards is_loading={props.address.isLoading || props.weather.isLoading}>
        <Table
          title={`${props.address.city}, ${props.address.state}`}
          titleIcon={props.weather.payload?.icon}
          headers={["DATE", "TEMP", "FEELS LIKE", "HUMIDITY", "WEATHER"]}
          body={props.weather.payload?.currentWeather ? [{ ...props.weather.payload?.currentWeather }] : null}
        />
      </Cards>
      <Cards is_loading={props.address.isLoading || props.weather.isLoading}>
        <Table
          title="Next few days"
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
          body={props.weather.payload?.dailyWeather}
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
