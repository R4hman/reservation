import { Link } from "react-router-dom";
import styles from "./ReusableTitle.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

const ReusableTitle = ({ title, url }) => {
  return (
    <header className={styles.reusableTitleHeader}>
      <h3>{title}</h3>
      <Link className={styles.reusableTitleLink} to={url}>
        Explore All
        <FaArrowRightLong />
      </Link>
    </header>
  );
};

export default ReusableTitle;
