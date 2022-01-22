import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardRoutes from './DashboardRoutes';


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<DashboardRoutes />} />
        <Route path="inicio" element={<h1>Caratula Inicio</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
