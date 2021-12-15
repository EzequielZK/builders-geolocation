import { getAddress } from "../../../models";

export function addressAction(lat, lng) {
  getAddress(lat, lng).then((response) => {
      
  })

  return {
    type: "ADDRESS",
    payload: data.address,
    isLoading: true,
  };
}
