import { Link } from "react-router-dom";
import ReusableTitle from "../../components/reusableTitle/ReusableTitle";
import useRestaurants from "../../hooks/useRestaurants";
import styles from "./Home.module.css";
import FilterNavigation from "../../components/filterNavigation/FilterNavigation";

const Home = () => {
  const { restaurants, isLoading } = useRestaurants();
  if (isLoading) {
    <div>loading...</div>;
  }
  return (
    <section className="container">
      <ReusableTitle title="Restaurants" url="/restaurants" />
      <main className={styles.restaurantContainer}>
        {restaurants?.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant.id}`}
            className={styles.restaurant}
            key={restaurant.id}
          >
            <img src={restaurant.imageUrls?.[0]} />
            <div>{restaurant.name}</div>
          </Link>
        ))}
      </main>
    </section>
  );
};

export default Home;
