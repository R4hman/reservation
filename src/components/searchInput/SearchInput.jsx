import { useEffect, useState } from "react";
import styles from "./SearchInput.module.css";
import { CiSearch } from "react-icons/ci";
import { useDebounce } from "use-debounce";
import useSearch, { getUsers } from "../../hooks/useSearch";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 1000);

  //   const { data, isLoading } = useSearch(value);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (value) {
      getUsers(value).then((users) => console.log("users", users));
    }
  }, [value]);

  //   if (isLoading) {
  //     return <div>loading...</div>;
  //   }

  return (
    <div className={styles.searchContainer}>
      <CiSearch
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
      {/* a */}
      {/* <p>{data?.length}</p> */}
    </div>
  );
};

export default SearchInput;
