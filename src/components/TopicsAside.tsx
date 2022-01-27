import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Topics } from '../routes/routes';

interface Props {
  topics: Topics[];
}

export const TopicsAside = ({ topics }: Props) => {

  const [visible, setVisible] = useState(false);


  return (
    <>
      <div
        className={`p-5 fixed ${visible ? 'block' : 'hidden'} lg:block lg:relative rounded sm:flex-[0_0_25%] max-w-full bg-indigo-500 lg:bg-white lg:text-black lg:border-emerald-600 lg:border-2 text-white top-0 bottom-0 left-0 right-0 mb-5 h-full lg:h-auto`}
      >
        <div className="h-3/5 lg:h-1/2">
          <h3
            className="text-3xl font-bold text-center mb-10 mt-5 sm:text-4xl lg:text-2xl"
          >Temas de la Unidad</h3>

          <ul
            className="flex flex-col justify-evenly items-center lg:items-start text-center lg:text-left h-full lg:h-auto"
          >
            {
              topics.map(({ topic, to }) => (
                <li
                  key={to}
                  className="text-2xl mb-10 lg:text-xl"
                >
                  <NavLink onClick={() => {
                    setVisible(false);
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    })
                    // window.scrollTo(0, 0);
                  }} className={({isActive}) => `${isActive && 'text-emerald-500 lg:text-purple-500'} lg:hover:text-purple-500` } to={to}>{topic}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      <button
        className="lg:hidden fixed bottom-0 right-0 mb-8 mr-8 rounded-full w-8 h-8 flex justify-center items-center p-8 shadow-lg bg-white shadow-gray-400"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <i className="fas fa-bars text-lg"></i>
      </button>
    </>
  )
};
