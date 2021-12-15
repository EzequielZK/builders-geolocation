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

    props.addressAction(lat, lng);
    props.weatherAction(lat, lng);
  };


  return (
    <div className={cssStyles.container}>
      {props.address.isLoading || props.weather.isLoading ? (
        "LOADING..."
      ) : (
        <>
          <Cards>
            <Table
              title={`${props.address.city}, ${props.address.state}`}
              titleIcon={props.weather.payload.icon}
              headers={["DATE", "WEATHER", "TEMP", "FEELS LIKE", "HUMIDITY"]}
              body={[{ ...props.weather.payload.currentWeather }]}
            />
          </Cards>
          <Cards>
            <Table
              title={`${props.address.city}, ${props.address.state}`}
              titleIcon={props.weather.payload.icon}
              headers={["DATE", "WEATHER", "TEMP", "FEELS LIKE", "HUMIDITY"]}
              body={[{ ...props.weather.payload.currentWeather }]}
            />
          </Cards>

        </>
      )}
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
