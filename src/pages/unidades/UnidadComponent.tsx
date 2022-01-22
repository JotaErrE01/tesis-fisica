import { Route, Routes, Navigate } from 'react-router-dom';
import { TopicsAside } from '../../components/TopicsAside';
import { Topics } from '../../routes/routes';
import { Fragment } from 'react';

interface Props {
  topics: Topics[]
}

export const UnidadComponent = ({ topics }: Props) => {  

  return (
    <div
      className="mx-auto container mt-10 px-5 flex overflow-hidden gap-5"
    >
      <Routes>
        {
          topics.map(({ path, Component }) => (
            <Fragment
              key={path}
            >
              <Route path={path} element={<Component />} />
            </Fragment>
          ))
        }
        <Route path="*" element={<Navigate to={topics[0].to} replace />} />
      </Routes>
      <TopicsAside topics={topics} />
    </div>
  )
};