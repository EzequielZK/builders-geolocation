import { getAddress } from "../../../models";

export function addressAction(lat, lng) {

  return (dispatch) => {
    dispatch({ type: "USER_ADDRESS", isLoading: true });
    getAddress(lat, lng).then((response) => {
      if(response.ok){
        return dispatch({
          type: "USER_ADDRESS",
          payload: response.data,
          isLoading: false,
        });
      }
      else{
        return dispatch({
          type: "USER_ADDRESS",
          isLoading: false,
        });
      }

    })
  };
}
