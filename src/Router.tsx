import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Calculator } from "./pages/Calculator/Calculator";

export const DASHBOARD_PATH = "/";
export const CALCULATOR_PATH = "/calculator";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route index path={DASHBOARD_PATH} element={<Dashboard />} />
        <Route index path={CALCULATOR_PATH} element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
};
