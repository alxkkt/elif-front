import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ShopPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default MyRoutes;
