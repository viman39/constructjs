import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Calculator } from "./pages/Calculator/Calculator";

export const DASHBOARD_PATH = "/constructjs";
export const CALCULATOR_PATH = "/constructjs/calculator";

export const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={DASHBOARD_PATH} replace />} />
      <Route index path={DASHBOARD_PATH} element={<Dashboard />} />
      <Route index path={CALCULATOR_PATH} element={<Calculator />} />
    </Routes>
  );
};
