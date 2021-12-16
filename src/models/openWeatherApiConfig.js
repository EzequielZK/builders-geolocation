import { create } from "apisauce";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
export const openWeatherApiKey = "f9f202c89a3cb4521ddb59eafd004628";

export const openWeatherApi = create({
  baseURL: BASE_URL,
  timeout: 20000,
});
