import { useQuery } from "@tanstack/react-query";

export const getRestaurants = async () => {
  const res = await fetch("http://localhost:3000/restaurants2");
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

export default useRestaurants;
