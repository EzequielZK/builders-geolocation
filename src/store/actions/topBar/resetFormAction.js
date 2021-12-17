import { reset as resetForm } from "redux-form";
import { addressAction, weatherAction } from "..";

export function resetFormAction(lat, lng) {
  return (dispatch) => {
    dispatch([
      resetForm("placeSearch"),
      addressAction(lat, lng),
      weatherAction(lat, lng),
    ]);
  };
}
