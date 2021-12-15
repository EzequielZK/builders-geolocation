import {
  openWeatherGeolocationApi,
  openWeatherGeolocationApiKey,
} from "../openWeatherGeolocationApiConfig";

export default async function getAddress(lat, lng) {
  const response = await openWeatherGeolocationApi.get(
    `/reverse?lat=${lat}&lon=${lng}&appid=${openWeatherGeolocationApiKey}`
  );
  return response.data[0];
}
