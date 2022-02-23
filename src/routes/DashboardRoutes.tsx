import { Routes, Route, Navigate } from 'react-router-dom';
import { NavigationLayout } from '../components/NavigationLayout';
import { routes } from './routes';
import { Glosario } from '../pages/Glosario';

function DashboardRoutes() {

  return (
    <>
      <NavigationLayout />
      <Routes>
        {
          routes.map(({ path, Component, topics, iframe, title, mainTopic }) => (
            <Route key={path} path={path} element={<Component topics={topics} iframe={iframe} title={title} mainTopic={mainTopic} />} />
          ))
        }
        <Route path="glosario" element={<Glosario />} />
        <Route path="*" element={<Navigate to="/inicio" replace />} />
      </Routes>
    </>
  )
}

export default DashboardRoutes;
