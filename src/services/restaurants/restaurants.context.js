import React, { useState, createContext, useEffect, useMemo } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";
export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([
    { name: 1 },
    { name: 2 },
    { name: 3 },
    { name: 4 },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
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
    retrieveRestaurants();
  }, []);

  if (isLoading) {
    return;
  }
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
