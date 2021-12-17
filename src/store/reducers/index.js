import addressReducer from "./home/addressReducer";
import weatherReducer from "./home/weatherReducer";
import {reducer as formReducer} from 'redux-form'

const createdReducers = {
  address: addressReducer,
  weather: weatherReducer,
  form: formReducer
};

export { createdReducers };
