import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Calculator } from "./pages/Calculator/Calculator";
import { Jobs } from "./pages/Jobs/Jobs";
import { Portofolio } from "./pages/Portofolio/Portofolio";

export const DASHBOARD_PATH = "/constructjs";
const ABOUTUS_PATH = "/constructjs#aboutUs";
const WATERPROOFING_PATH = "/constructjs#waterproofing";
const JOBS_PATH = "/constructjs/jobs";
const CALCULATOR_PATH = "/constructjs/calculator";
const PORTOFOLIO_PATH = "/constructjs/portofolio";

export const ROUTES = [
  {
    path: DASHBOARD_PATH,
    page: <Dashboard />,
    title: "Acasa",
  },
  {
    path: ABOUTUS_PATH,
    page: <Dashboard />,
    title: "Despre Noi",
  },
  {
    path: WATERPROOFING_PATH,
    page: <Dashboard />,
    title: "Sisteme Impermeabilizare",
  },
  {
    path: CALCULATOR_PATH,
    page: <Calculator />,
    title: "Estimator Costuri",
  },
  {
    path: PORTOFOLIO_PATH,
    page: <Portofolio />,
    title: "Portofoliu",
  },
  {
    path: JOBS_PATH,
    page: <Jobs />,
    title: "Joburi",
  },
];

export const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={DASHBOARD_PATH} replace />} />
      {ROUTES.map(({ path, page }) => (
        <Route path={path} element={page} key={path} />
      ))}
    </Routes>
  );
};
