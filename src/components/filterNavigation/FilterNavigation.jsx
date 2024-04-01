import { useState } from "react";
import styles from "./FilterNavigation.module.css";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { times, guests } from "../../../fakeData";

const FilterNavigation = () => {
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

  const handleBtn = () => {
    if (!filterOptions.time) {
      toast.error("Choose proper time");
      return;
    }
    navigate(
      `/restaurants?date=${filterOptions.date}&time=${filterOptions.time}&guests=${filterOptions.guests}`
    );
  };
  return (
    <div className="container">
      <div className={styles.navContainer}>
        <div className={styles.date}>
          <div>
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
        </div>
        <div className={styles.time}>
          <div>
            <h4>Time</h4>
          </div>
          <select
            onChange={(e) =>
              setFilterOptions((prev) => ({ ...prev, time: e.target.value }))
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
        <div className={styles.guests}>
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
  );
};

export default FilterNavigation;
