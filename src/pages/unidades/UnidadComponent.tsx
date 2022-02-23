import { Route, Routes, Navigate } from 'react-router-dom';
import { TopicsAside } from '../../components/TopicsAside';
import { ComponentProps } from '../../routes/routes';
import { Fragment } from 'react';


export const UnidadComponent = ({ topics, mainTopic }: ComponentProps) => {  

  return (
    <>
      <h1
        className='mx-auto container text-start my-5 text-4xl font-bold text-gray-800'
      >{ mainTopic }</h1>
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
    </>

  )
};
