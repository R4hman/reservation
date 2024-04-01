import { Link } from "react-router-dom";
import styles from "./RestaurantCard.module.css";

const RestaurantCard = ({ restaurant }) => {
  console.log("restaurant", restaurant);
  return (
    <Link
      to={`/restaurants/${restaurant?.id}`}
      className={styles.restaurantItem}
    >
      <div className={styles.restaurantItemInfo}>
        <h2>{restaurant?.name}</h2>
        <p>{restaurant?.bio?.slice(0, 20)}</p>
      </div>
      <div className={styles.restaurantImgContainer}>
        <img src={restaurant?.imageUrls[0]} />
      </div>
    </Link>
  );
};

export default RestaurantCard;
