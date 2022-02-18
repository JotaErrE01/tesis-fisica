import { Typewriter, Cursor } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';

export const FisicaApp = () => {

  const navigate = useNavigate();

  return (
    <>
      <a className="flex fixed z-20 bottom-5 right-10 gap-2" href="https://www.contadorvisitasgratis.com" title="contadores de visitas">
        <p className="bg-clip-text text-transparent bg-gradient-to-t from-yellow-300 via-red-500 to-purple-600 font-karla relative z-1 hover:cursor-default text-xl font-bold">Visitas:</p>
        <img className="" src="https://counter2.stat.ovh/private/contadorvisitasgratis.php?c=bhwkyxe2hhw532g2ey26eq9l8uu4ajd7" title="contadores de visitas" alt="contadores de visitas" />
      </a>

      <div className="h-screen">
        <img className="w-[65%] sm:w-2/5 md:w-3/5 lg:w-[35%] m-auto fixed inset-0" src="./solarSystem.svg" alt="Solar System" />
        <div className='text-center fixed mx-auto left-0 right-0 top-5 font-semibold w-4/5'>
          <h1 className='text-[0.9rem] sm:text-4xl lg:text-4xl text-purple-800 font-karla leading-loose'>Herramientas Web en el Proceso de Enseñanza y Aprendizaje en la Asignatura de Física</h1>
        </div>

        <div className="flex items-center lg:flex-col lg:items-start lg:justify-end h-2/5 lg:h-4/5 lg:w-1/2 lg:gap-5 sm:w-1/4">
          <img className="fixed right-2 top-28 lg:top-28 lg:left-2 w-[8.5rem] lg:ml-16 lg:mb-10 order-1 lg:order-none sm:right-10 sm:top-36 sm:w-52 lg:w-60" src="/logo.png" alt="logo" />

          <div className="text-4xl mt-10 md:text-6xl lg:mt-0 lg:text-7xl ml-5 lg:ml-10 font-bold">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-t from-yellow-300 via-red-500 to-rose-600 font-karla relative z-1 hover:cursor-default">Física</h2>
            <span className="block bg-clip-text text-transparent bg-gradient-to-t from-yellow-300 via-red-500 to-rose-600 font-karla relative z-1 hover:cursor-default">
              <Typewriter
                words={['Juega', 'Aprende', 'Diviértete']}
                loop
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
          className="fixed bg-clip-text text-transparent bg-gradient-to-t from-yellow-400 via-orange-600 to-rose-600 border-2 border-orange-500 font-karla rounded px-5 py-2 hover:bg-clip-padding hover:border-none hover:via-orange-500 hover:text-white transition-all duration-300 ease-out  bottom-20 left-10 text-xl md:text-4xl lg:top-40 lg:right-20 lg:bottom-auto lg:left-auto"
          onClick={() => {
            navigate('/inicio');
          }}
        >Ingresar</button>

        <img className="fixed bottom-0 right-0 w-[50%] sm:w-[25%] md:w-[30%] lg:w-[25%] -rotate-[40deg] lg:-rotate-[70deg]" src="./Rocket.svg" alt="Rocket" />
      </div>
    </>
  )
}