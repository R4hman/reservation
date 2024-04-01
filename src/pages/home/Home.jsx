import { Link } from "react-router-dom";
import ReusableTitle from "../../components/reusableTitle/ReusableTitle";
import useRestaurants from "../../hooks/useRestaurants";
import styles from "./Home.module.css";
import CircularPageLoader from "../../components/pageLoader/CircularPageLoader";

const Home = () => {
  const { restaurants, isLoading } = useRestaurants();
  if (isLoading) {
    return <CircularPageLoader />;
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
            <div className={styles.info}>
              <h2>{restaurant.name}</h2>
              <h4>{restaurant.description}</h4>
            </div>
          </Link>
        ))}
      </main>
    </section>
  );
};

export default Home;
