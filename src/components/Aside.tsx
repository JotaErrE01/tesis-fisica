import { useState } from 'react';
import homeSvg from '../svgs/home.svg';
import videoSvg from '../svgs/video.svg';
import gameSvg from '../svgs/game.svg';
import { useNavigate } from 'react-router-dom';

interface Props {
  visible: boolean;
  setVisible: Function;
}


export const Aside = ({ setVisible, visible }: Props) => {

  const [animationRuning, setAnimationRuning] = useState(visible);
  const navigate = useNavigate();

  const closeAside = () => {
    setAnimationRuning(false);
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
      className={`h-screen z-10 w-[15rem] sm:w-[20rem] rounded-tr-lg rounded-br-lg bg-indigo-500 fixed animate__animated animate__slideInLeft ${!animationRuning ? 'animate__slideOutLeft' : ''} `}
    >
      <div className="flex flex-col h-full">
        <div
          className="flex justify-end hover:cursor-pointer w-fit ml-auto mr-5 mt-5"
          onClick={closeAside}
        >
          <i className="fas fa-times text-white text-3xl m-0"></i>
        </div>

        <div className="mb-5 mt-2">
          <img src="https://okdiario.com/img/2017/02/01/fisica-fuerzas-fundamentales-655x368.jpeg" alt="mi imagen" />
        </div>

        <ul className="flex flex-col justify-center gap-5">
          <li className="border-2 border-solid border-white border-l-0 border-r-0">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white w-full font-bold py-5 flex items-end gap-5 justify-center transition-all duration-300 ease-in-out"
              onClick={() => handleClick('/unidad/1')}
            >
              <img className="w-8 sm:w-10" src={homeSvg} alt="Home ICO" />

              <span
                className="w-2/5 text-left text-2xl sm:text-3xl"
              >Unidades</span>
            </button>
          </li>

          <li className="border-2 border-solid border-white border-l-0 border-r-0">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white w-full font-bold py-5 flex items-center gap-5 justify-center transition-all duration-300 ease-in-out"
              onClick={() => { handleClick('/juegos/1') }}
            >
              <img className="w-8 sm:w-10" src={videoSvg} alt="Video ICO" />

              <span
                className="h-8 w-2/5 text-left text-2xl sm:text-3xl"
              >Videos</span>
            </button>
          </li>

          <li className="border-2 border-solid border-white border-l-0 border-r-0">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white w-full font-bold py-5 flex items-center gap-5 justify-center transition-all duration-300 ease-in-out"
              onClick={() => { handleClick('/juegos/1') }}
            >
              <img className="invert w-8 sm:w-10" src={gameSvg} alt="Game ICO" />

              <span
                className="h-8 w-2/5 text-left text-2xl sm:text-3xl"
              >Juegos</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
