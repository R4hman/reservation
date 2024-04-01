import { useQuery } from "@tanstack/react-query";

export const getRestaurants = async (queryDate, queryTime, guest) => {
  fetch(
    `http://localhost:3000/restaurants2?date=${queryDate}&times.time=${queryTime}&times.guestCombination_like=${guest}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Filtered restaurants:", data);
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });
};

const useSearchRestaurants = (queryDate, queryTime, guest) => {
  const { data: restaurants, isLoading } = useQuery({
    queryKey: ["restaurants"],
    queryFn: () => getRestaurants(queryDate, queryTime, guest),
  });
  return {
    restaurants,
    isLoading,
  };
};

export default useSearchRestaurants;
