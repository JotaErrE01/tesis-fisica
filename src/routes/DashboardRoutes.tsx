import { Routes, Route, Navigate } from 'react-router-dom';
import { NavigationLayout } from '../components/NavigationLayout';
import { routes } from './routes';

function DashboardRoutes() {

  return (
    <>
      <NavigationLayout />
      <Routes>
        {
          routes.map(({ path, Component, topics, iframe, title }) => (
            <Route key={path} path={path} element={<Component topics={topics} iframe={iframe} title={title} />} />
          ))
        }
        <Route path="video/:id" element={<h1>videos</h1>} />
        <Route path="juego/:id" element={<h1>juegos</h1>} />
        <Route path="*" element={<Navigate to="/unidad/1" replace />} />
      </Routes>
    </>
  )
}

export default DashboardRoutes;
