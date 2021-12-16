import { create } from "apisauce";

const BASE_URL = "http://api.openweathermap.org/geo/1.0";
export const openWeatherGeolocationApiKey = "f9f202c89a3cb4521ddb59eafd004628";

export const openWeatherGeolocationApi = create({
  baseURL: BASE_URL,
  timeout: 20000,
});
