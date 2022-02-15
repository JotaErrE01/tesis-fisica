import { useState } from 'react';
import homeSvg from '../svgs/home.svg';
import videoSvg from '../svgs/video.svg';
import gameSvg from '../svgs/game.svg';
import book from '../svgs/books-svgrepo-com.svg';
import { useNavigate } from 'react-router-dom';

interface Props {
  visible: boolean;
  setVisible: Function;
  animationRuning: boolean;
  setAnimationRuning: Function;
}


export const Aside = ({ setVisible, visible, animationRuning, setAnimationRuning }: Props) => {
  const navigate = useNavigate();

  const closeAside = () => {
    setAnimationRuning(true);
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  }

  const handleClick = (route: string) => {
    closeAside();
    navigate(route);
  }

  return (
    <div
      className={`h-screen md:h-auto md:mb-10 md:w-full z-10 w-[15rem] sm:w-[20rem] rounded-tr-lg rounded-br-lg md:rounded-none bg-indigo-500 fixed animate__animated ${visible ? 'visible animate__slideInLeft' : 'invisible'} ${ animationRuning ? 'animate__slideOutLeft' : ''} md:animate-none md:static md:visible`}
    >
      <div className="flex flex-col h-full md:h-auto md:w-full md:flex-row md: container md:mx-auto">
        <div
          className="flex justify-end hover:cursor-pointer w-fit ml-auto mr-5 mt-5 md:hidden"
          onClick={closeAside}
        >
          <i className="fas fa-times text-white text-3xl m-0"></i>
        </div>

        <div className="mb-5 mt-2 md:hidden">
          <img src="https://okdiario.com/img/2017/02/01/fisica-fuerzas-fundamentales-655x368.jpeg" alt="mi imagen" />
        </div>

        <ul className="flex flex-col justify-center gap-5 md:flex-row md:w-full md:justify-evenly">
          <li className="border-2 border-solid border-white border-x-0 md:border-y-0">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white w-full font-bold py-5 flex items-end gap-5 md:gap-2 justify-center transition-all duration-300 ease-in-out md:py-3 md:px-5"
              onClick={() => handleClick('/inicio')}
            >
              <img className="w-8 md:w-10" src={homeSvg} alt="Home ICO" />

              <span
                className="w-2/5 md:w-auto text-left text-2xl"
              >Inicio</span>
            </button>
          </li>

          <li className="border-2 border-solid border-white border-x-0 md:border-y-0">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white w-full font-bold py-5 flex items-end gap-5 md:gap-2 justify-center transition-all duration-300 ease-in-out md:py-3 md:px-5"
              onClick={() => handleClick('/unidad/1')}
            >
              <img className="w-8 md:w-10 invert" src={book} alt="Home ICO" />

              <span
                className="w-2/5 md:w-auto text-left text-2xl"
              >Unidades</span>
            </button>
          </li>

          <li className="border-2 border-solid border-white border-x-0 md:border-y-0">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white w-full font-bold py-5 flex items-center gap-5 md:gap-2 justify-center transition-all duration-300 ease-in-out md:py-3 md:px-5"
              onClick={() => { handleClick('/juegos/1') }}
            >
              <img className="w-8 md:w-10" src={videoSvg} alt="Video ICO" />
              <span
                className="h-8 w-2/5 md:w-auto text-left text-2xl"
              >Videos</span>
            </button>
          </li>

          <li className="border-2 border-solid border-white border-x-0 md:border-y-0">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white w-full font-bold py-5 flex items-center gap-5 md:gap-2 justify-center transition-all duration-300 ease-in-out md:py-3 md:px-5"
              onClick={() => { handleClick('/juegos/1') }}
            >
              <img className="invert w-8 md:w-10" src={gameSvg} alt="Game ICO" />

              <span
                className="h-8 w-2/5 md:w-auto text-left text-2xl"
              >Juegos</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
