import { useNavigate, useParams } from "react-router-dom";
import Gallery from "../../components/gallery/Gallery";
import useRestaurant from "../../hooks/useRestaurant";
import styles from "./RestaurantDetail.module.css";
import { GiMeal } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";
import { guests, times } from "../../../fakeData";
import { CiSearch } from "react-icons/ci";
import toast from "react-hot-toast";

const RestaurantDetail = () => {
  const { id } = useParams();
  const { restaurant, isLoading } = useRestaurant(id);
  const [isNameVisible, setIsNameVisible] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    date: new Date(
      new Date().getTime() - new Date().getTimezoneOffset() * 60000
    )
      .toISOString()
      .slice(0, 10),
    time: "",
    guests: "1",
  });
  const navigate = useNavigate();
  const nameRef = useRef();

  const handleBtn = () => {
    if (!filterOptions.time) {
      toast.error("Choose proper time");
      return;
    }
    navigate(
      `/restaurants?date=${filterOptions.date}&time=${filterOptions.time}&guests=${filterOptions.guests}`
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const nameTop = nameRef.current.getBoundingClientRect().top;

      if (nameTop < window.innerHeight && nameTop > 0) {
        setIsNameVisible(true);
      } else {
        setIsNameVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isLoading) return <div>loading...</div>;

  console.log("restaurant", restaurant);
  return (
    <section className="container">
      <main className={styles.detailSection}>
        <Gallery images={restaurant?.imageUrls} />
        <div className={styles.detailInfo}>
          <div className={styles.detailLeft}>
            <div>
              <h2
                style={{ color: isNameVisible ? "red" : "black" }}
                ref={nameRef}
              >
                {restaurant?.name}
              </h2>
              <p>{restaurant?.description}</p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas hic
              suscipit veniam facilis dolores deleniti nostrum aliquid nam sed
              sequi eveniet eum nulla quo, quisquam accusamus mollitia fuga
              rerum beatae cupiditate impedit quos. Aperiam sit doloremque
              doloribus delectus blanditiis ducimus eum fuga aut, omnis enim
              quaerat! Ab voluptates sequi reprehenderit!
            </div>
            <div>
              <iframe
                src={restaurant?.address?.map}
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <h4>Reservation</h4>
              <div className={styles.reservationInfo}>
                <GiMeal style={{ fontSize: "2rem" }} />
                <span>Reservation for parties of 1 to 20</span>
              </div>
              <button className={styles.bookBtn}>Book Now</button>
            </div>
          </div>
          <div className={styles.detailRight}>
            <div className={styles.stickyItem}>
              {!isNameVisible ? (
                <div className={styles.rightInfo}>
                  <h2>{restaurant?.name}</h2>
                  <img src={restaurant?.imageUrls[0]} alt="" />
                </div>
              ) : (
                ""
              )}
              <div className={styles.filters}>
                <div className={styles.detailDate}>
                  <h4>Date</h4>

                  <input
                    className={styles.dateInput}
                    onChange={(e) =>
                      setFilterOptions((prev) => ({
                        ...prev,
                        date: e.target.value,
                      }))
                    }
                    type="date"
                    defaultValue={filterOptions.date}
                    min={filterOptions.date}
                  />
                </div>
                <div className={styles.detailTime}>
                  <h4>Time</h4>

                  <select
                    onChange={(e) =>
                      setFilterOptions((prev) => ({
                        ...prev,
                        time: e.target.value,
                      }))
                    }
                  >
                    <option value="">Select time</option>
                    {times.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.detailGuests}>
                  <h4>Guests</h4>

                  <select
                    onChange={(e) =>
                      setFilterOptions((prev) => ({
                        ...prev,
                        guests: e.target.value,
                      }))
                    }
                  >
                    {guests.map((guest) => (
                      <option key={guest} value={guest}>
                        {guest} {guest === "1" ? "guest" : "guests"}
                      </option>
                    ))}
                  </select>
                </div>
                <button onClick={handleBtn} className={styles.searchBtn}>
                  <CiSearch style={{ fontSize: "2rem" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default RestaurantDetail;
