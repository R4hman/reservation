import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Restaurant from "./pages/restaurant/Restaurant";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Layout from "./layout/Layout";
import NotFound from "./pages/notfound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants/:id" element={<Restaurant />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
