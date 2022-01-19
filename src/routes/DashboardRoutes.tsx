import { Routes, Route, Navigate } from 'react-router-dom';
import { Unidad1 } from '../pages/unidades/Unidad1';
import { Navigation } from '../components/Navigation';

function DashboardRoutes() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="unidades/1" element={<Unidad1 />} />
        <Route path="unidades/2" element={<Unidad1 />} />
        <Route path="unidades/3" element={<Unidad1 />} />
        <Route path="unidades/4" element={<Unidad1 />} />
        <Route path="unidades/5" element={<Unidad1 />} />
        <Route path="unidades/6" element={<Unidad1 />} />
        <Route path="video/:id" element={<Unidad1 />} />
        <Route path="*" element={<Navigate to="unidades/1" replace />} />
      </Routes>
    </>
  )
}

export default DashboardRoutes;
