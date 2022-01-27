import corrienteIMG from '../../../images/corriente.png';
import intensidadIMG from '../../../images/corrienteIntensidad.png';


export const CorrienteElectrica = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center mb-10">Corriente Eléctrica</h1>

      <div className="leading-loose">
        <div className="flex flex-col lg:flex-row mb-5 gap-5">
          <div>
            <p>
              La corriente eléctrica es la circulación de cargas eléctricas en un circuito eléctrico. La intensidad de corriente eléctrica(I) es la cantidad de electricidad o carga eléctrica(Q) que circula por un circuito en la unidad de tiempo(t). Para denominar la Intensidad se utiliza la letra I y su unidad es el Amperio(A).
            </p>

            <div className="my-10 flex w-4/5 mx-auto gap-20 lg:flex-row flex-col items-center">
              <div className="basis-2/">
                <img className="rounded" src={corrienteIMG} alt="Corriente" />
              </div>

              <div className="basis-2/4">
                <img src={intensidadIMG} alt="Intensidad" />
              </div>
            </div>

            <p>
              La intensidad de corriente eléctrica es una magnitud básica del SI. Su unidad en este sistema es el amperio (A).
              La relación anterior se utiliza para definir la unidad de carga, el culombio (C), como la cantidad de carga eléctrica que atraviesa en un segundo una sección de un conductor por el que circula una intensidad de corriente de un amperio: 1 C = 1 A ∙ 1 s
            </p>

            <img className="mx-auto my-5" src="https://soloformulas.com/wp-content/uploads/2015/03/intensidadcorriente_thumb.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
};
