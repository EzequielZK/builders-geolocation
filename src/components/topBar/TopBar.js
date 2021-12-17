import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Logo } from "../images/Images";
import {
  addressAction,
  weatherAction,
  resetFormAction,
} from "../../store/actions";
import cssStyles from "./topBar.module.css";
import { Button, Form } from "..";

function TopBar(props) {
  return (
    <div className={cssStyles.container}>
      <img alt="logo" src={Logo} />

      <Form
        onSubmit={({ latitude, longitude }) => {
          props.addressAction(latitude, longitude);
          props.weatherAction(latitude, longitude);
        }}
        is_loading={props.weather.isLoading || props.address.isLoading}
      />
      <div className={cssStyles.buttonsContainer}>
        <Button.Outlined
          is_loading={props.weather.isLoading || props.address.isLoading}
          onClick={() => {
            if (props.form.placeSearch.values) {
              const { latitude, longitude } = props.form.placeSearch.values;
              props.addressAction(latitude, longitude);
              props.weatherAction(latitude, longitude);
            } else {
              navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                props.addressAction(lat, lng);
                props.weatherAction(lat, lng);
              });
            }
          }}
        >
          Update data
        </Button.Outlined>

        <Button.Outlined
          is_loading={props.weather.isLoading || props.address.isLoading}
          onClick={() => {
            navigator.geolocation.getCurrentPosition((position) => {
              const lat = position.coords.latitude;
              const lng = position.coords.longitude;

              props.resetFormAction(lat, lng);
            });
          }}
        >
          Current location
        </Button.Outlined>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { address, weather, form } = state;
  return {
    address,
    weather,
    form,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { addressAction, weatherAction, resetFormAction },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
