import { openModal } from "../../components";
import {
  openWeatherGeolocationApi,
  openWeatherGeolocationApiKey,
} from "../openWeatherGeolocationApiConfig";

//Function that calls the data from weather API, models the data and return to screen view

export default async function getAddress(lat, lng) {
  try {
    const response = await openWeatherGeolocationApi.get(
      `/reverse?lat=${lat}&lon=${lng}&appid=${openWeatherGeolocationApiKey}`
    );
    // const response = await openWeatherGeolocationApi.get(
    //   `/reverse?lat=${lat}&lon=${lng}&appid=${""}`
    // );
    if (response.ok) {
      return { ...response, data: response.data[0] };
    } else {
      throw response;
    }
  } catch (response) {
    openModal.serverErrorModal({ response });
    return response;
  }
}
