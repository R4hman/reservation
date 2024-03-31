import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Layout from "./layout/Layout";
import NotFound from "./pages/notfound/NotFound";
import RestaurantDetail from "./pages/restaurantDetail/RestaurantDetail";
import Restaurants from "./pages/restaurants/Restaurants";
import { useState } from "react";

function App() {
  const [type, setType] = useState("sign-in");
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/:id" element={<RestaurantDetail />} />
        <Route
          path="/login"
          element={<Login type={type} setType={setType} />}
        />
        <Route
          path="/sign-up"
          element={<SignUp type={type} setType={setType} />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
