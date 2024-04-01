import { Link, useNavigate } from "react-router-dom";
import { deleteCookies } from "../../lib/cookies";
import styles from "./DropdownProfile.module.css";

const DropdownProfile = ({ setOpenDropdown }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    deleteCookies();
    setOpenDropdown(false);
    navigate(0);
  };

  return (
    <div className={styles.dropdownProfile}>
      <ul className={styles.lists}>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li onClick={handleLogout}>logout</li>
      </ul>
    </div>
  );
};

export default DropdownProfile;
