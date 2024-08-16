import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import NotFound from "./modules/not-found/NotFound";
import Dashboard from "./modules/dashboard/Dashboard";
import MapData from "./modules/map-data/MapData";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/map-data" element={<MapData />} />
      <Route path="/not-found" element={<NotFound />} />

      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
