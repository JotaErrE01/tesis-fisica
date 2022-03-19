import { Route, Routes, Navigate } from 'react-router-dom';
import { TopicsAside } from '../../components/TopicsAside';
import { ComponentProps } from '../../routes/routes';
import { Fragment } from 'react';


export const UnidadComponent = ({ topics, mainTopic, img }: ComponentProps) => {

  return (
    <>
      <h1
        className='mx-auto container text-start my-5 text-4xl font-bold text-gray-800'
      >{mainTopic}</h1>
      <div
        className="mx-auto container mt-10 px-5 flex overflow-hidden gap-5"
      >
        <div>
          {
            img &&
            <img className='rounded shodow shadow-gray-500 shadow-md w-1/2 mx-auto mb-5' src={img} />
          }
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
        </div>
        <TopicsAside topics={topics} />
      </div>
    </>

  )
};
