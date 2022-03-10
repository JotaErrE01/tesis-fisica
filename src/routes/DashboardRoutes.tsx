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
          routes.map(({ path, Component, topics, url, title, mainTopic, title2, url2 }) => (
            <Route key={path} path={path} element={<Component topics={topics} url={url} title={title} mainTopic={mainTopic} title2={title2} url2={url2} />} />
          ))
        }
        <Route path="glosario" element={<Glosario />} />
        <Route path="*" element={<Navigate to="/inicio" replace />} />
      </Routes>
    </>
  )
}

export default DashboardRoutes;
