import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import NotFound from "./modules/not-found/NotFound";
import Dashboard from "./modules/dashboard/Dashboard";
import MapData from "./modules/map-data/MapData";
import CreateSpace from "./modules/create-space/CreateSpace";
import GuestList from "./modules/guest-list/GuestList";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/map-data" element={<MapData />} />
      <Route path="/create-space" element={<CreateSpace />} />
      <Route path="/guest-list" element={<GuestList />} />
      <Route path="/not-found" element={<NotFound />} />

      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
