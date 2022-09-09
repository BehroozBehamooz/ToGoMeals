import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("locatiion not foung");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const camelizedResult = camelize(result);
  const { geometry = {} } = camelizedResult.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng };
};
