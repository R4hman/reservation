import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";
import { Suspense, lazy } from "react";
import CircularPageLoader from "./components/pageLoader/CircularPageLoader";

const SignUp = lazy(() => import("./pages/auth/SignUp"));
const Login = lazy(() => import("./pages/auth/Login"));
const Profile = lazy(() => import("./pages/profile/Profile"));
const Restaurants = lazy(() => import("./pages/restaurants/Restaurants"));
const RestaurantDetail = lazy(() =>
  import("./pages/restaurantDetail/RestaurantDetail")
);
const Home = lazy(() => import("./pages/home/Home"));
const NotFound = lazy(() => import("./pages/notfound/NotFound"));
const ReservationSuccess = lazy(() =>
  import("./pages/reservationSuccess/ReservationSuccess")
);

function App() {
  return (
    <Suspense fallback={<CircularPageLoader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurants/:id" element={<RestaurantDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/reservation-success" element={<ReservationSuccess />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
