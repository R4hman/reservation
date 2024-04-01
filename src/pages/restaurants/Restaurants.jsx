import { useSearchParams } from "react-router-dom";
import ActiveFilters from "../../components/activeFilters/ActiveFilters";
import useRestaurants, {
  useRestaurantsBasedQuery,
} from "../../hooks/useRestaurants";
import { queryRestaurants } from "../../lib/queryRestaurants";
import styles from "./Restaurants.module.css";
import { useEffect, useState } from "react";
import RestaurantCard from "../../components/restaurantCard/RestaurantCard";
import CircularPageLoader from "../../components/pageLoader/CircularPageLoader";

const Restaurants = () => {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();

  const queryDate = searchParams.get("date");
  const queryTime = searchParams.get("time");
  const guests = searchParams.get("guests");
  const search = searchParams.get("search");
  const { restaurants, isLoading } = useRestaurants();
  const {
    restaurants: restaurantsBasedQuery,
    isLoading: restaurantsIsLoading,
  } = useRestaurantsBasedQuery(search);

  useEffect(() => {
    if (restaurantsBasedQuery?.length) {
      setData(restaurantsBasedQuery);
    } else if (queryDate) {
      const filteredRestaurants = queryRestaurants(
        restaurants,
        queryDate,
        queryTime,
        guests
      );
      setData(filteredRestaurants);
    } else {
      setData(restaurants);
    }
  }, [restaurantsBasedQuery, restaurants, guests, queryDate, queryTime]);

  if (isLoading || restaurantsIsLoading) {
    return <CircularPageLoader />;
  }

  return (
    <section className={styles.restaurantsSection}>
      <ActiveFilters />
      <div className={styles.restaurants}>
        <div className={styles.restaurantsLeft}>
          {!data?.length ? (
            <div>No restaurant has found</div>
          ) : (
            <div>
              {data?.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          )}
        </div>
        <div className={styles.restaurantsRight}>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/d/embed?mid=14OsE0b0IUDLEEi4c9Q4e1VReXF0&hl=en_US&ehbc=2E312F"
            width="640"
            height="480"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Restaurants;
