# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Documentation

The system has three main components: TopBar, Home and a Modal that is always ready to show up when it needs.

```sh
import "./App.css";
import { Modal, TopBar } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <>
      <TopBar />
      <Home />
      <Modal/>
    </>
  );
}

export default App;
```

The TopBar component is responsible for showing the company banner and the 'Update data' button, that updates screen's data.

```sh
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
```

The Home component is responsible for showing the main content of the system, the current and daily weather. First of all, it takes the geolocation data from the user through the browser, using React's 'useEffect' hook. Then it calls the reverse geolocation and the weather API from OpenWeather, which returns the city and state, current weather and daily weather based on latitude and longitude passed. The DOM shows two tables with all the rescued data. One for the current weather, and another for the daily weather.

```sh
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

```

The Modal component is responsible for showing feedback of the system. Whenever an error occurs, the Modal component is triggered by try/catch code that goes around each request and shows the error messages.

```sh
import React, { Component } from "react";
import { getModalRef } from "./openModal";
import modalStyles from "./modal.module.css";
import ServerErrorModal from "./serverErrorModal/ServerErrorModal";
import { OutsideClick } from "..";

class Modal extends Component {
  state = {
    configs: {},
    open: false,
    type: null,
  };

  componentDidMount() {
    getModalRef(this);
  }

  setModalConfigs = (configs, type, open) => {
    if (open) {
      setTimeout(() => {
        this.setState({ open, configs, type });
      }, 50);
    }
  };

  modalTypes = () => {
    const { type } = this.state;
    const types = {
      serverError: ServerErrorModal,
    };
    return types[type];
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    const Component = this.modalTypes();
    if (this.state.open) {
      return (
        <div className={modalStyles.container}>
          <OutsideClick onOutsideClick={() => this.closeModal()}>
            <div
              className={`${modalStyles.content} ${
                modalStyles[this.state.type]
              } ${modalStyles[this.state.configs?.type]}`}
            >
              <Component
                configs={this.state.configs}
                closeModal={this.closeModal}
              />
            </div>
          </OutsideClick>
        </div>
      );
    }
    return <></>;
  }
}

export default Modal;


```

## Libraries

| Library | Link | Description | 
| ------ | ------ | ------ |
| ReactJS | https://pt-br.reactjs.org/ | The JS framework used | 
| Redux | https://redux.js.org/ | Storage used to save the data from OpenWeather API's
| apisauce | https://www.npmjs.com/package/apisauce | Used to call the API's
| FontAwesome | https://fontawesome.com/ | Used for system icons
