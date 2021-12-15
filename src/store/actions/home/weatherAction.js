import { getWeather } from "../../../models";

export function weatherAction(lat, lng) {
  return (dispatch) => {
    dispatch({ type: "USER_WEATHER", isLoading: true });
    getWeather(lat, lng).then((response) => {
      return dispatch({
        type: "USER_WEATHER",
        payload: response,
        isLoading: false,
      });
    });
  };
}
