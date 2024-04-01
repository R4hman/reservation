import { Link, useLocation } from "react-router-dom";
import { getCookie } from "../../lib/cookies";
import styles from "./ReservationSuccess.module.css";

const ReservationSuccess = () => {
  const {
    state: {
      options: { date, time, guests },
    },
  } = useLocation();

  const fullName = getCookie("fullName");
  return (
    <section className="container">
      <div className={styles.reservationContainer}>
        <div>
          <h2>Thank you for Reservation.</h2>
          <h2>Restaurant Reserved Successfully</h2>
          <div className={styles.reservationInfo}>
            <ul className={styles.reservationLists}>
              <li>
                Reservation has been made by <span>{fullName}</span>
              </li>
              <li>
                Time <span>{time}</span>
              </li>
              <li>
                Date <span>{date}</span>
              </li>
              <li>
                Guests <span>{guests}</span>
              </li>
            </ul>
          </div>
          <Link to="/" className={styles.homeLink}>
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReservationSuccess;
