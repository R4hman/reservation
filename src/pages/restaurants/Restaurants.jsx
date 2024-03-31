import { Link, useLocation, useSearchParams } from "react-router-dom";
import ActiveFilters from "../../components/activeFilters/ActiveFilters";
import useRestaurants from "../../hooks/useRestaurants";
import { queryRestaurants } from "../../lib/queryRestaurants";
import { v4 as uuidv4 } from "uuid";
import styles from "./Restaurants.module.css";
const Restaurants = () => {
  const [searchParams] = useSearchParams();
  const queryDate = searchParams.get("date");
  const queryTime = searchParams.get("time");
  const guests = searchParams.get("guests");
  const { restaurants, isLoading } = useRestaurants();

  if (isLoading) {
    return <div>loading...</div>;
  }
  const filteredRestaurants = queryRestaurants(
    restaurants,
    queryDate,
    queryTime,
    guests
  );

  return (
    <section className={styles.restaurantsSection}>
      <ActiveFilters />
      <div className={styles.restaurants}>
        <div className={styles.restaurantsLeft}>
          {!filteredRestaurants.length ? (
            <div>No restaurant has found</div>
          ) : (
            <div>
              {filteredRestaurants.map((restaurant) => (
                <Link
                  to={`/restaurant/${restaurant.id}`}
                  key={uuidv4()}
                  className={styles.restaurantItem}
                >
                  <div className={styles.restaurantItemInfo}>
                    <h2>{restaurant.name}</h2>
                    <p>{restaurant?.bio?.slice(0, 20)}</p>
                  </div>
                  <div className={styles.restaurantImgContainer}>
                    <img src={restaurant.imageUrls[0]} />
                  </div>
                </Link>
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
