import styles from "./UserLogged.module.css";
import userAvatar from "../../../public/assets/userAvatar.jpg";
import DropdownProfile from "../dropdownProfile/DropdownProfile";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const UserLogged = ({ mail, fullName }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpenDropdown(false);
  }, [location.pathname]);
  return (
    <div className={styles.loggedIn}>
      <div>
        <img src={userAvatar} alt="user avatar" />
        <span onClick={() => setOpenDropdown((prev) => !prev)}>{fullName}</span>
        {openDropdown ? (
          <DropdownProfile setOpenDropdown={setOpenDropdown} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default UserLogged;
