import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Logo } from "../images/Images";
import { addressAction, weatherAction } from "../../store/actions";
import cssStyles from "./topBar.module.css";
import { Button } from "..";

function TopBar(props) {
  return (
    <div className={cssStyles.container}>
      <img alt="logo" src={Logo} />
      <Button.Outlined
        is_loading={props.weather.isLoading || props.address.isLoading}
        onClick={() => {
          navigator.geolocation.getCurrentPosition((position) =>{
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            props.addressAction(lat, lng);
            props.weatherAction(lat, lng);
          })

        }}
      >
        Update data
      </Button.Outlined>
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

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
