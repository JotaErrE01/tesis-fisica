import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { routes, Topics } from '../routes/routes';

interface Props {
  topics: Topics[];
}

export const TopicsAside = ({ topics }: Props) => {

  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);


  return (
    <>
      <div
        className={`p-5 fixed ${visible ? 'block' : 'hidden'} lg:block sm:relative rounded sm:flex-[0_0_25%] max-w-full bg-emerald-500 lg:bg-white lg:text-black lg:border-emerald-600 lg:border-2 text-white top-0 bottom-0 left-0 right-0 mb-5 h-full lg:h-auto`}
      >
        <div>
          <h3
            className="text-2xl font-bold text-center mb-10 mt-5"
          >Temas de la Unidad</h3>
          <ul
            className="flex flex-col justify-evenly h-1/2"
          >
            {
              topics.map(({ topic, to }) => (
                <li
                  key={to}
                  className="text-xl mb-10"
                >
                  <NavLink className={({isActive}) => `${isActive && 'text-purple-500'} lg:hover:text-purple-500` } to={to}>{topic}</NavLink>
                </li>
              ))
            }

            {/* {
              routes.map(({ to, topics }) => {
                if (pathname.includes(to)) {
                  return topics?.map(({ topic, to }) => (
                    <li
                      key={to}
                      className="text-xl mb-10"
                    >
                      <NavLink className="lg:hover:text-purple-500" to="to">{topic}</NavLink>
                    </li>
                  ))
                }
              })
            } */}
          </ul>

        </div>
      </div>

      <button
        className="lg:hidden fixed bottom-0 right-0 mb-8 mr-8 bg-purple-500 rounded-full w-8 h-8 flex justify-center items-center p-8 hover:bg-purple-600"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <i className="fas fa-bars text-white text-lg"></i>
      </button>
    </>
  )
};
