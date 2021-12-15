import React from "react";
import { connect } from "react-redux";
import { getAddress } from "../../../models";
import { addressAction } from "../../../store/actions";
import { Cards } from "../components";
import cssStyles from "./homeView.module.css";

function HomeView(props) {
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(getPosition);
  }, []);

  const getPosition = (position) => {
    console.log({ position });
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    props.getAddress(lat, lng);
  };
  console.log({ address: props.address });
  return (
    <div className={cssStyles.container}>
      <Cards title="Localização"></Cards>
      <Cards title="Localização"></Cards>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    address: state.address,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getAddress: (lat, lng) => dispatch(addressAction(lat, lng)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
