import { create } from "apisauce";

const BASE_URL = "http://api.openweathermap.org/geo/1.0";
export const openWeatherGeolocationApiKey = "52219e46da1db33cf0ad6c6b4cb4d908";

export const openWeatherGeolocationApi = create({
  baseURL: BASE_URL,
  timeout: 20000,
});
