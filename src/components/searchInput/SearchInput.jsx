import { useEffect, useState } from "react";
import styles from "./SearchInput.module.css";
import { CiSearch } from "react-icons/ci";
import { useDebounce } from "use-debounce";
import { getUsers } from "../../hooks/useSearch";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 1000);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (value) {
      getUsers(value).then((users) => console.log("users", users));
    }
  }, [value]);

  const handleNavigate = () => {
    if (value) {
      navigate(`/restaurants?search=${search}`);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <CiSearch
        onClick={handleNavigate}
        style={{
          fontSize: "1.5rem",
          position: "absolute",
          top: "10px",
          right: "10px",
          cursor: "pointer",
        }}
      />
      <input
        onChange={handleSearch}
        placeholder="Search..."
        type="text"
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchInput;
