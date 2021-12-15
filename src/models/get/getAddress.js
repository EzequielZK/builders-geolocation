import { openWeatherApi, openWeatherApiKey } from "../openWeatherApiConfig";

export default async function getAddress(lat, lng) {
  const response = await openWeatherApi.get(
    `/reverse?lat=${lat}&lon=${lng}&appid=${openWeatherApiKey}`
  );
  console.log({ response });
  return {
    address: response.formatted_address,
  };
}
