import React, { useState, createContext, useEffect, useContext } from "react";
import { LocationContext } from "../location/location.context";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";
export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const locatiionContext = useContext(LocationContext);
  const { location } = locatiionContext;

  const retrieveRestaurants = (locationLatLng) => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(locationLatLng)
        .then(restaurantsTransform)
        .then((res) => {
          setIsLoading(false);
          setRestaurants(res);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationLatLng = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationLatLng);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
