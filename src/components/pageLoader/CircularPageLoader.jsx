import { FaCircleNotch } from "react-icons/fa";

import styles from "./CircularPageLoader.module.css";

const CircularPageLoader = () => {
  return (
    <div className={styles.spinnerContainer}>
      <FaCircleNotch className={styles.spinner} color="#50b5ff" size={40} />
    </div>
  );
};

export default CircularPageLoader;
