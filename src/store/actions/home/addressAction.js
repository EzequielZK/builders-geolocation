import { getAddress } from "../../../models";

export function addressAction(lat, lng) {
  return (dispatch) => {
    dispatch({ type: "USER_ADDRESS", isLoading: true });
    getAddress(lat, lng).then((response) => {
      return dispatch({
        type: "USER_ADDRESS",
        payload: response,
        isLoading: false,
      });
    });
  };
}
