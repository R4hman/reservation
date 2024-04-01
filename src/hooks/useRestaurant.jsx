import { useQuery } from "@tanstack/react-query";

export const getRestaurant = async (id) => {
  const res = await fetch(`http://localhost:3000/restaurants/${id}`);
  const data = await res.json();
  return data;
};

const useRestaurant = (id) => {
  const { data: restaurant, isLoading } = useQuery({
    queryKey: ["restaurant"],
    queryFn: () => getRestaurant(id),
  });
  return {
    restaurant,
    isLoading,
  };
};

export default useRestaurant;
