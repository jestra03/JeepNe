import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LaunchPage from "../pages/LaunchPage";
import PricingPage from "../pages/PricingPage";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/home" element={<LaunchPage />} />
        <Route path="/" element={<LaunchPage />} />
        <Route path="/pricing-plans/:type?" element={<PricingPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
