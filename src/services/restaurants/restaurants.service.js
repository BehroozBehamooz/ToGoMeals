import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("location not found");
    }
    // console.log("mock: ", mock);
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = [
      mockImages[Math.ceil(Math.random() * (mockImages.length - 1))],
    ];
    return {
      ...restaurant,
      isOpenNow: restaurant?.opening_hours?.open_now ?? false,
      isClosedTemporarily: restaurant.business_status === "OPERATIONAL",
    };
  });
  return camelize(mappedResults);
};
