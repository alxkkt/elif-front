import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default MyRoutes;
