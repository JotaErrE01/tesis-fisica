import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1
        className="text-center text-4xl font-bold mb-5"
      >Módulos de Herramientas para el Proceso de Aprendizaje 👩‍🏫</h1>
      <div className="flex flex-col gap-5 items-center mx-auto container mb-10">
        <div
          className="mt-5 rounded w-4/5 lg:w-[60%] flex flex-col lg:flex-row hover:scale-110 transition-all duration-300 cursor-pointer"
          onClick={() => { window.open('https://new.edmodo.com/joincg/ir8ysf', '_blank')?.focus(); }}
        >
          <div className="border-cyan-600 border-8 p-4 lg:border-r-0 basis-1/4 rounded-l flex justify-center">
            <img src="./edmodo.png" alt="Edmodo" />
          </div>

          <p className="bg-cyan-600 text-white p-5 text-lg rounded-r basis-3/4">Edmodo es una plataforma tecnológica, social, educativa y gratuita que permite la comunicación entre los alumnos y los profesores en un entorno cerrado y privado a modo de microblogging, creado para un uso específico en educación media superior. <br />
            <span className='font-bold'>Aula de clases virtual perteneciente a la asignatura de física.</span>
            <br />
            <span className='font-bold'>Código: ir8ysf</span>
          </p>
        </div>

        <div className="flex gap-5 flex-wrap w-4/5 md:w-auto justify-center  mx-auto container">
          <div
            className="md:w-[20rem] flex flex-col hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => window.open('https://quizizz.com/join/quiz/62354506337613001d807aad/start?studentShare=true', '_blank')?.focus()}
          >
            <div className="border-amber-600 border-8 border-b-0 p-4 rounded-t flex justify-center">
              <img
                className="h-[8rem]"
                src="./quizizz.png"
                alt="Quizizz"
              />
            </div>

            <p className="bg-amber-600 text-white p-5 text-lg basis-4/5 rounded-b">Quizizz es una empresa india de software educativo con sede en Bangalore, India, que crea y vende una plataforma de participación estudiantil gamificada.
              <br />
              <span className='font-bold'>Iniciar autoevaluación perteneciente a la unidad #1 y #2</span>
            </p>
          </div>

          <div
            className="md:w-[20rem] flex flex-col hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => window.open('https://kahoot.it/challenge/04208054?challenge-id=932bcb07-5ede-4d4e-a16d-d911215a7775_1650667970249', '_blank')?.focus()}
          >
            <div className="border-purple-600 border-8 border-b-0 p-4 rounded-t flex justify-center">
              <img
                className="h-[8rem]"
                src="./kahoot.png"
                alt="Kahoot"
              />
            </div>

            <p className="bg-purple-600 text-white p-5 text-lg basis-4/5 rounded-b">Kahoot! es una plataforma gratuita que permite la creación de cuestionarios de evaluación. Es una herramienta por la que el profesor crea concursos en el aula para aprender o reforzar el aprendizaje y donde los alumnos son los concursantes.
              <br />
              <span className='font-bold'>Iniciar autoevaluación perteneciente a la unidad #3 y #4</span>
            </p>
          </div>

          <div
            className="md:w-[20rem] flex flex-col hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => window.open('https://b.socrative.com/login/student/?feature=embed', '_blank')?.focus()}
          >
            <div className="border-orange-600 border-8 border-b-0 p-4 rounded-t flex justify-center">
              <img
                className="h-[8rem]"
                src="socrative.svg"
                alt="Socrative"
              />
            </div>

            <p className="bg-orange-600 text-white p-5 text-lg basis-4/5 rounded-b">Socrative es una herramienta multimedia que permite crear encuestas y cuestionarios conociendo la respuesta de los alumnos en tiempo real a través de los ordenadores.
              <br />
              <span className='font-bold'>Iniciar autoevaluación perteneciente a la unidad #5 y #6</span>
              <br />
              <p>
                Nombre de Aula: <span className='font-bold text-base'>PAMELA6081</span>
              </p>
              <p>Ingresar con el nombre del estudiante</p>
            </p>
          </div>

          <div className="md:w-[20rem] flex flex-col hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => window.open('https://www.calcuvio.com/movimiento-rectilineo', '_blank')?.focus()}
          >
            <div className="border-green-600 border-8 border-b-0 p-4 rounded-t flex justify-center">
              <img
                className="h-[8rem]"
                src="./calcuvio.png"
                alt="Calcuvio"
              />
            </div>

            <p className="bg-green-600 text-white p-5 text-lg basis-4/5 rounded-b">Calcuvio es una herramienta gratuita diseñada para el calculo de ejercicios de movimiento rectilíneo uniforme y movimiento rectilineo uniformemente variado.
            </p>
          </div>

          <div className="md:w-[20rem] flex flex-col hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => window.open('https://po4h36.wixsite.com/laboratoriovirtual/blank-11', '_blank')?.focus()}
          >
            <div className="border-yellow-600 border-8 border-b-0 p-4 rounded-t flex justify-center">
              <img
                className="h-[8rem]"
                src="./lastResource.png"
                alt="Calcuvio"
              />
            </div>

            <p className="bg-yellow-600 text-white p-5 text-lg basis-4/5 rounded-b">Pagina web "Laboratorio virtual" elaboradora por el MSc. Salvador Hurtado Fernández  " donde encontraremos temas y recursos de bachillerato.
            </p>
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
          {/* <div
            className="rounded w-[20rem] lg:w-[60%] flex flex-col lg:flex-row hover:scale-110 transition-all duration-300 cursor-pointer"
            onClick={() => {
              navigate('/glosario');
            }}
          >
            <div className="border-sky-600 border-8 p-4 lg:border-r-0 basis-1/4 rounded-l flex justify-center">
              <img
                className="h-[8rem] w-[15rem]"
                src="glosario.png"
                alt="Glosario"
              />
            </div>

            <p className="bg-sky-600 text-white p-5 text-lg rounded-r basis-3/4">Encuentra la definicion de las palabras que desconoces en nuestro glosario.​</p>
          </div> */}
        </div>

      </div>
    </>
  )
};
