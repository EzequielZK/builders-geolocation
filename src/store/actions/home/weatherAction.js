import { getWeather } from "../../../models";

export function weatherAction(lat, lng) {
  return (dispatch) => {
    dispatch({ type: "USER_WEATHER", isLoading: true });
    getWeather(lat, lng).then((response) => {
      if (response.ok) {
        return dispatch({
          type: "USER_WEATHER",
          payload: response.data,
          isLoading: false,
        });
      } else {
        return dispatch({
          type: "USER_WEATHER",
          isLoading: false,
        });
      }
    });
  };
}
