import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardRoutes from './DashboardRoutes';
import { FisicaApp } from '../pages/FisicaApp';


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FisicaApp />} />
        <Route path="*" element={<DashboardRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}
