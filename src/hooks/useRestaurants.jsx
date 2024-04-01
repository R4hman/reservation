import { useQuery } from "@tanstack/react-query";

export const getRestaurants = async () => {
  const res = await fetch("http://localhost:3000/restaurants");
  const data = await res.json();
  return data;
};
export const getRestaurantsBasedQury = async (key) => {
  console.log("key", key);
  const res = await fetch(`http://localhost:3000/restaurants?q=${key}`);
  const data = await res.json();
  return data;
};

const useRestaurants = () => {
  const { data: restaurants, isLoading } = useQuery({
    queryKey: ["restaurants"],
    queryFn: getRestaurants,
  });
  return {
    restaurants,
    isLoading,
  };
};
export const useRestaurantsBasedQuery = (key) => {
  console.log("key", key);
  const { data: restaurants, isLoading } = useQuery({
    queryKey: ["restaurantsBasedQuery", key],
    queryFn: () => getRestaurantsBasedQury(key),
    enabled: !!key,
  });
  return {
    restaurants,
    isLoading,
  };
};

export default useRestaurants;
