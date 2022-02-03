import { Typewriter, Cursor } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="h-screen">
      <img className="w-4/5 sm:w-2/5 md:w-3/5 lg:w-2/5 m-auto fixed inset-0" src="./solarSystem.svg" alt="Solar System" />

      <div className="flex items-center md:h-2/5 lg:h-full">
        <div className="text-6xl mt-10 md:text-8xl lg:mt-0 lg:text-9xl ml-10 font-bold">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-t from-yellow-300 via-red-500 to-rose-600 font-karla relative z-1 hover:cursor-default">Física
          </h1>
          <span className="block bg-clip-text text-transparent bg-gradient-to-t from-yellow-300 via-red-500 to-rose-600 font-karla relative z-1 hover:cursor-default">
            <Typewriter
              words={['Juega', 'Aprende', 'Diviértete']}
              loop={false}
            />
            <span
              className="text-orange-500 font-bold"
            >
              <Cursor />
            </span>
          </span>
        </div>
      </div>

      <button
        className="fixed bg-clip-text text-transparent bg-gradient-to-t from-yellow-400 via-orange-600 to-rose-600 border-2 border-orange-500 font-karla rounded px-5 py-2 hover:bg-clip-padding hover:border-none hover:via-orange-500 hover:text-white transition-all duration-300 ease-out  bottom-20 left-10 text-xl md:text-4xl lg:top-20 lg:right-20 lg:bottom-auto lg:left-auto"
        onClick={() => {
          navigate('/unidad/1');
        }}
      >Ingresar</button>

      <img className="fixed bottom-0 right-0 w-[50%] sm:w-[25%] md:w-[30%] lg:w-[25%] -rotate-[40deg] lg:-rotate-[70deg]" src="./Rocket.svg" alt="Rocket" />
    </div>
  )
}