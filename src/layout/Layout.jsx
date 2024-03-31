import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import FilterNavigation from "../components/filterNavigation/FilterNavigation";

const Layout = () => {
  const location = useLocation();
  return (
    <div>
      <Header />
      {location.pathname === "/" || location.pathname === "/restaurants" ? (
        <FilterNavigation />
      ) : (
        <div></div>
      )}

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
