import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import DashboardRoutes from './DashboardRoutes';


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<DashboardRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}
