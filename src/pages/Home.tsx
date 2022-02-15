import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1
        className="text-center text-4xl font-bold mb-5"
      >Módulos de Herramientas para el Proceso de Aprendizaje 👩‍🏫</h1>
      <div className="flex flex-col gap-5 items-center mx-auto container mb-10">
        <div className="rounded w-4/5 lg:w-[60%] flex mt-5 flex-col lg:flex-row hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="border-cyan-600 border-8 p-4 lg:border-r-0 basis-1/4 rounded-l flex justify-center">
            <img src="./edmodo.png" alt="Edmodo" />
          </div>

          <p className="bg-cyan-600 text-white p-5 text-lg rounded-r basis-3/4">Edmodo es una plataforma tecnológica, social, educativa y gratuita que permite la comunicación entre los alumnos y los profesores en un entorno cerrado y privado a modo de microblogging, creado para un uso específico en educación media superior.</p>
        </div>

        <div className="flex gap-5 flex-wrap w-4/5 justify-center">
          <div className="md:w-[20rem] flex flex-col hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="border-amber-600 border-8 border-b-0 p-4 rounded-t flex justify-center">
              <img
                className="h-[8rem]"
                src="./quizizz.png"
                alt="Quizizz"
              />
            </div>

            <p className="bg-amber-600 text-white p-5 text-lg basis-4/5 rounded-b">Quizizz es una empresa india de software educativo con sede en Bangalore, India, que crea y vende una plataforma de participación estudiantil gamificada.</p>
          </div>

          <div className="md:w-[20rem] flex flex-col hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="border-purple-600 border-8 border-b-0 p-4 rounded-t flex justify-center">
              <img
                className="h-[8rem]"
                src="./kahoot.png"
                alt="Kahoot"
              />
            </div>

            <p className="bg-purple-600 text-white p-5 text-lg basis-4/5 rounded-b">Kahoot! es una plataforma gratuita que permite la creación de cuestionarios de evaluación. Es una herramienta por la que el profesor crea concursos en el aula para aprender o reforzar el aprendizaje y donde los alumnos son los concursantes. </p>
          </div>

          <div className="md:w-[20rem] flex flex-col hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="border-orange-600 border-8 border-b-0 p-4 rounded-t flex justify-center">
              <img
                className="h-[8rem]"
                src="./classDojo.png"
                alt="Quizizz"
              />
            </div>

            <p className="bg-orange-600 text-white p-5 text-lg basis-4/5 rounded-b">ClassDojo es la plataforma de gestión del comportamiento de más rápido crecimiento en el mundo, utilizada por maestros, padres y estudiantes.​​​​</p>
          </div>

          <div className="md:w-[20rem] flex flex-col hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="border-green-600 border-8 border-b-0 p-4 rounded-t flex justify-center">
              <img
                className="h-[8rem]"
                src="./Google-lens.svg"
                alt="Quizizz"
              />
            </div>

            <p className="bg-green-600 text-white p-5 text-lg basis-4/5 rounded-b">Google Lens es una aplicación móvil de reconocimiento de imagen desarrollada por Google. Anunciada por primera vez durante el Google I/O 2017, está diseñada para mostrar información relevante usando análisis visual.​</p>
          </div>

          <div 
            className="md:w-[20rem] flex flex-col hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => {
              navigate('/glosario');
            }}
          >
            <div className="border-sky-600 border-8 border-b-0 p-4 rounded-t flex justify-center">
              <img
                className="h-[8rem] w-[18rem]"
                src="glosario.png"
                alt="Glosario"
              />
            </div>

            <p className="bg-sky-600 text-white p-5 text-lg basis-4/5 rounded-b">Encuentra la definicion de las palabras que desconoces en nuestro glosario.​</p>
          </div>
        </div>
      </div>
    </>
  )
};
